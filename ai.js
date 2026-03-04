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
The student wrote:
"${userText}"

Give clear, encouraging feedback. For each sentence:
1. Say if it is correct or has errors
2. If there are errors, explain WHY and show the corrected version
3. If it is correct, briefly highlight what the student did well

Then end with a "🚀 Challenge:" section. This is the most important part.

Analyze what the student actually wrote — their vocabulary range, sentence complexity, and grammatical structures used — and propose ONE next step that feels like a natural evolution of their writing. The challenge should:
- Be specific to what they just wrote, not generic
- Introduce a structure that is slightly beyond their current output (not a giant leap)
- Give a concrete, incomplete sentence for them to finish, or a sentence to transform
- Feel like a creative invitation, not a grammar exercise
- Vary naturally: sometimes it could be about register, sometimes about sentence rhythm, sometimes about a specific grammatical structure — whatever makes most sense given the lesson and what they wrote

If the student made errors, base the challenge on the corrected version, not the original attempt.
Never use generic challenges like "try to write more" or "add more details."
Ensure all example sentences are 100% grammatically correct and natural.

Respond in English.`;;

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
