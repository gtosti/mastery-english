const GROQ_API_KEY = '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';

async function checkFreeProduction(index) {
    const lesson    = allLessons[index];
    const textarea  = document.getElementById(`free-prod-${index}`);
    const resultBox = document.getElementById(`free-prod-ai-result-${index}`);
    const btn       = document.getElementById(`free-prod-check-${index}`);

    // Para o microfone se estiver ativo
    if (activeRecognition) stopRecognition(index);

    const userText = textarea.value.trim();
    if (!userText) {
        resultBox.innerHTML = '<span style="color:var(--secondary);">✏️ Write or speak your sentences before checking.</span>';
        return;
    }

    btn.disabled = true;
    btn.innerText = '⏳ Checking...';
    resultBox.innerHTML = '<span style="color:#718096; font-style:italic;">Analyzing your sentences...</span>';

    const prompt = `You are an English grammar teacher giving feedback to a student learning English at the ${lesson.module} level.

The lesson topic is: "${lesson.title}"
Lesson explanation: "${(lesson.explanation || '').replace(/<[^>]*>/g, '')}"

The student wrote these sentences as a free production exercise:
"${userText}"

Give clear, encouraging feedback. For each sentence:
1. Say if it is correct or has errors
2. If there are errors, explain WHY it is wrong and show the corrected version
3. If it is correct, briefly say what the student did well

Keep the feedback concise, friendly, and pedagogically useful. Focus only on grammar and vocabulary relevant to the lesson topic. Use ✅ for correct sentences and ⚠️ for sentences with errors.

Your primary goal is progressive challenge. Every feedback must end with a "🚀 Challenge:" that is measurably harder than what the student just wrote. Follow this escalation logic strictly:

LEVEL 1 — Simple sentence written correctly → challenge: add a time clause, reason, or contrast (because, although, when)
LEVEL 2 — Compound sentence written correctly → challenge: introduce a passive structure, reported speech, or modal verb
LEVEL 3 — Complex sentence written correctly → challenge: combine two advanced structures in one sentence (e.g. passive + modal, reported speech + conditional)
LEVEL 4 — Near-perfect output → challenge: rewrite the sentence in a more formal or academic register, or introduce a structure from the next CEFR level

If the student made errors, correct them first, then set the challenge one step above the corrected version — not above the original attempt.

The challenge must always be:
- One specific, concrete instruction with an example sentence to complete or transform
- Actionable: the student must be able to attempt it immediately
- Never generic ("try to write more!" is not a challenge)
- When providing example sentences, ensure they are 100% grammatically correct and natural. Never combine two subordinating conjunctions in the same clause.

Respond in the same language the student used (if they wrote in Portuguese, respond in Portuguese; if in English, respond in English).`;

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.4,
                max_tokens: 600
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err?.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        const feedback = data?.choices?.[0]?.message?.content;

        if (!feedback) throw new Error('Empty response from Groq.');

        resultBox.innerHTML = `
            <div style="border-top: 2px solid var(--accent); padding-top: 15px; margin-top: 5px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <div style="font-size:0.75rem; color:var(--accent); font-weight:bold; text-transform:uppercase; letter-spacing:1px;">
                        🤖 AI Feedback
                    </div>
                    <!-- [v1.3] Botão para ouvir o feedback -->
                    <button onclick="speak(document.getElementById('feedback-text-${index}').innerText)"
                        style="background:none; border:1px solid var(--accent); color:var(--accent);
                               padding:4px 10px; border-radius:4px; cursor:pointer; font-size:0.75rem;">
                        🔊 Listen
                    </button>
                </div>
                <div id="feedback-text-${index}" style="white-space: pre-wrap; line-height: 1.7; font-size: 0.95rem; color: #white;">
${feedback}
                </div>
            </div>
        `;

        // [v1.3] Lê o feedback automaticamente
        speak(feedback);

        userProgress[index].freeDraft = userText;
        saveProgress();

    } catch (error) {
        resultBox.innerHTML = `
            <span style="color:var(--secondary);">
                ❌ Could not connect to Groq. Check your API key in improvements.js.<br>
                <small style="font-weight:normal;">${error.message}</small>
            </span>
        `;
    } finally {
        btn.disabled = false;
        btn.innerText = '🤖 Check with AI';
    }
}

function freeProductionHTML(index, p) {
    return `
        <div class="exercise-section free-production-section">
            <h3>✍️ Free Production</h3>
            <p class="free-production-intro">
                Write or <b>speak</b> 2 original sentences using what you learned.
                Then click <b>"Check with AI"</b> for personalized feedback.
            </p>
            <textarea id="free-prod-${index}"
                class="free-production-textarea"
                placeholder="Write your sentences here, or use the 🎤 button to speak..."
                >${p.freeProduction || p.freeDraft || ''}</textarea>
            <div id="mic-status-${index}" class="mic-status"></div>
            <div class="free-production-actions">
                <button class="btn btn-mic" id="mic-btn-${index}">🎤 Speak</button>
                <button class="btn btn-ai" id="free-prod-check-${index}">🤖 Check with AI</button>
                <button class="btn btn-save" id="free-prod-save-${index}">💾 Save</button>
                <span id="free-prod-feedback-${index}" class="free-prod-feedback"></span>
            </div>
            <div id="free-prod-ai-result-${index}" class="free-prod-result"></div>
        </div>
    `;
}

function attachFreeProductionListeners(index) {
    const textarea = document.getElementById(`free-prod-${index}`);
    if (textarea) {
        textarea.addEventListener('focus', () => { textarea.style.borderColor = 'var(--accent)'; });
        textarea.addEventListener('blur',  () => { textarea.style.borderColor = '#e2e8f0'; });
        textarea.addEventListener('input', () => {
            userProgress[index].freeDraft = textarea.value;
            saveProgress();
        });
    }

    // [v1.3] Microfone
    const micBtn = document.getElementById(`mic-btn-${index}`);
    if (micBtn) {
        micBtn.addEventListener('click', () => startVoiceInput(index));
    }

    const checkAIBtn = document.getElementById(`free-prod-check-${index}`);
    if (checkAIBtn) {
        checkAIBtn.addEventListener('click', () => checkFreeProduction(index));
    }

    const saveProdBtn  = document.getElementById(`free-prod-save-${index}`);
    const prodFeedback = document.getElementById(`free-prod-feedback-${index}`);
    if (saveProdBtn) {
        saveProdBtn.addEventListener('click', () => {
            const text = document.getElementById(`free-prod-${index}`).value.trim();
            if (!text) {
                prodFeedback.style.color = 'var(--secondary)';
                prodFeedback.innerText = 'Write at least one sentence first.';
                return;
            }
            userProgress[index].freeProduction = text;
            saveProgress();
            prodFeedback.style.color = 'var(--success)';
            prodFeedback.innerText = '✓ Saved!';
            setTimeout(() => prodFeedback.innerText = '', 3000);
        });
    }
}
