/** MASTERY ENGLISH — CORE ENGINE */

const allLessons = [
    ...(typeof m1Data !== 'undefined' ? m1Data.map(l => ({...l, module: 'A1'})) : []),
    ...(typeof m2Data !== 'undefined' ? m2Data.map(l => ({...l, module: 'A2'})) : []),
    ...(typeof m3Data !== 'undefined' ? m3Data.map(l => ({...l, module: 'B1'})) : []),
    ...(typeof m4Data !== 'undefined' ? m4Data.map(l => ({...l, module: 'B2'})) : []),
    ...(typeof vocabData !== 'undefined' ? vocabData.map(l => ({...l, module: 'VOCAB'})) : []),
];

const storageKey = 'eng_mastery_v4_smart';

let savedProgress = JSON.parse(localStorage.getItem(storageKey)) || [];
let userProgress = allLessons.map((_, i) =>
    savedProgress[i] && typeof savedProgress[i] === 'object'
        ? savedProgress[i]
        : { score: 0, lastDate: null }
);

let currentFilter = 'ALL';

function init() {
    applySpacedRepetition();
    renderNav();
    updateDashboard();
}

function speak(text) {
    if (!text) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "").replace(/___/g, "blank");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
}

function applySpacedRepetition() {
    const now = Date.now();
    const msInDay = 24 * 60 * 60 * 1000;
    userProgress = userProgress.map(p => {
        if (p && p.score > 0 && p.lastDate) {
            const daysPassed = Math.floor((now - p.lastDate) / msInDay);
            if (daysPassed > 0) {
                p.score = Math.max(0, p.score - (daysPassed * 20));
            }
        }
        return p || { score: 0, lastDate: null };
    });
    saveProgress();
}

function setFilter(mod, btn) {
    currentFilter = mod;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderNav();
}

function filterLessons() {
    const term = document.getElementById('lessonSearch').value.toLowerCase();
    renderNav(term);
}

function renderNav(searchTerm = "") {
    const list = document.getElementById('nav-list');
    if (!list) return;
    list.innerHTML = "";

    allLessons.forEach((lesson, index) => {
        const matchesSearch = !searchTerm || lesson.title.toLowerCase().includes(searchTerm);
        const matchesModule = currentFilter === 'ALL' || lesson.module === currentFilter;

        if (!matchesSearch || !matchesModule) return;

        const p = userProgress[index] || { score: 0, lastDate: null };
        const score = p.score || 0;
        const isCompleted = score >= 100;
        const isFading = score > 0 && score < 100;

        const li = document.createElement('li');
        li.id = `nav-${index}`;
        li.className = `nav-item ${isCompleted ? 'mastered' : ''} ${isFading ? 'fading' : ''}`;

        li.innerHTML = `
            <div class="nav-item-inner">
                <div class="nav-item-text">
                    <span>${lesson.title}</span>
                    <small>${lesson.module}</small>
                </div>
                <span class="nav-item-score ${score >= 100 ? 'score-done' : score > 0 ? 'score-fading' : 'score-zero'}">
                    ${score}%
                </span>
            </div>
        `;

        li.onclick = () => loadLesson(index);
        list.appendChild(li);
    });
}

/**
 * Renderiza uma lição na área principal.
 * Se for lição de vocabulário (lesson.words), delega para renderVocabLesson().
 */
function loadLesson(index) {
    const lesson      = allLessons[index];
    const area        = document.getElementById('lesson-area');
    const p           = userProgress[index] || { score: 0, lastDate: null };
    const isCompleted = p.score >= 100;
    const isFading    = p.score > 0 && p.score < 100;

    if (typeof activeRecognition !== 'undefined' && activeRecognition) stopRecognition(index);

    if (lesson.words) {
        renderVocabLesson(index, lesson, area, p);
        return;
    }

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${index}`);
    if (activeNav) activeNav.classList.add('active');

    area.innerHTML = `
        ${isCompleted ? '<div class="completion-banner">⭐ LESSON MASTERED - 100% SCORE ⭐</div>' : ''}
        ${isFading ? `<div class="fading-alert">⚠️ Retenção caiu para ${Math.round(p.score)}%. Refaça os exercícios!</div>` : ''}

        <div class="lesson-meta">
            <small class="lesson-module-tag">MODULE: ${lesson.module} | LESSON ${index + 1}</small>
            <button class="speak-btn" data-speak-text="${escapeAttr(lesson.title)}" title="Listen to Title">🔊</button>
        </div>

        <h1>${lesson.title}</h1>

        <div class="explanation" data-speak-explanation="true" title="Click to listen">
            ${lesson.explanation}
            <div class="explanation-hint">(Click to listen 🔊)</div>
        </div>

        <div class="exercise-section">
            <h3>Practice Exercises</h3>
            ${lesson.exercises.map((ex, i) => `
                <div class="q-block">
                    <p>
                        ${i + 1}. ${ex.question}
                        <button class="speak-btn" data-speak-text="${escapeAttr(ex.question)}">🔊</button>
                    </p>
                    <input type="text" id="ans-${index}-${i}"
                           value="${isCompleted ? escapeAttr(ex.answer) : ''}"
                           ${isCompleted ? 'disabled' : ''}
                           placeholder="Type your answer here...">
                    <div id="feed-${index}-${i}" class="feedback"></div>
                </div>
            `).join('')}
            <button class="btn btn-check" id="btn-submit-${index}" ${isCompleted ? 'disabled' : ''}>
                ${isCompleted ? 'Excellent! Lesson Completed' : 'Check Answers'}
            </button>
        </div>

        ${freeProductionHTML(index, p)}

        <div class="prompt-box">
            <div class="prompt-label">AI Conversation Practice</div>
            <code id="prompt-${index}">${lesson.llmPrompt}</code>
            <button class="btn btn-copy" id="copy-btn-${index}">
                📋 Copy Prompt for AI Practice
            </button>
        </div>
    `;

    area.scrollTop = 0;

    area.querySelectorAll('[data-speak-text]').forEach(btn => {
        btn.addEventListener('click', () => speak(btn.dataset.speakText));
    });

    const explanationEl = area.querySelector('[data-speak-explanation]');
    if (explanationEl) {
        explanationEl.addEventListener('click', () => speak(explanationEl.innerText));
    }

    const submitBtn = document.getElementById(`btn-submit-${index}`);
    if (submitBtn && !isCompleted) {
        submitBtn.addEventListener('click', () => checkLesson(index));
    }

    const copyBtn = document.getElementById(`copy-btn-${index}`);
    if (copyBtn) {
        copyBtn.addEventListener('click', () => copyPrompt(index));
    }

    attachFreeProductionListeners(index);
}

function checkLesson(idx) {
    const lesson = allLessons[idx];
    let hits = 0;

    lesson.exercises.forEach((ex, i) => {
        const input   = document.getElementById(`ans-${idx}-${i}`);
        const feed    = document.getElementById(`feed-${idx}-${i}`);
        const userVal = input.value.trim().toLowerCase();

        if (userVal === ex.answer.toLowerCase()) {
            hits++;
            feed.innerHTML = '✓ Perfect!';
            feed.style.color = 'var(--success)';
            input.style.borderColor = 'var(--success)';
        } else {
            const tipHTML = ex.tip
                ? `<span class="tip-text">💡 ${ex.tip}</span>`
                : '';
            feed.innerHTML = `✗ Correct: <b>${ex.answer}</b>${tipHTML}`;
            feed.style.color = 'var(--secondary)';
            input.style.borderColor = 'var(--secondary)';
        }
    });

    const score = Math.round((hits / lesson.exercises.length) * 100);

    const existingDraft      = userProgress[idx]?.freeDraft || '';
    const existingProduction = userProgress[idx]?.freeProduction || '';

    userProgress[idx] = {
        score,
        lastDate: Date.now(),
        freeDraft: existingDraft,
        freeProduction: existingProduction
    };

    saveProgress();
    updateDashboard();
    renderNav();

    if (score === 100) setTimeout(() => loadLesson(idx), 600);
}

function updateDashboard() {
    const grammarLessons  = allLessons.filter(l => l.module !== 'VOCAB');
    const grammarProgress = userProgress.filter((p, i) => allLessons[i]?.module !== 'VOCAB');

    const completed  = grammarProgress.filter(p => p && p.score >= 100).length;
    const perc       = grammarLessons.length > 0 ? Math.round((completed / grammarLessons.length) * 100) : 0;
    const totalScore = grammarProgress.reduce((sum, p) => sum + (p ? p.score : 0), 0);
    const avg        = grammarLessons.length > 0 ? Math.round(totalScore / grammarLessons.length) : 0;

    const progressEl = document.getElementById('main-progress');
    const percEl     = document.getElementById('perc-complete');
    const avgEl      = document.getElementById('avg-grade');

    if (progressEl) progressEl.style.width = perc + "%";
    if (percEl)     percEl.innerText = perc + "%";
    if (avgEl)      avgEl.innerText  = avg + "%";
}

function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify(userProgress));
}

function copyPrompt(idx) {
    const el  = document.getElementById(`prompt-${idx}`);
    if (!el) return;
    navigator.clipboard.writeText(el.innerText);
    const btn = document.getElementById(`copy-btn-${idx}`);
    if (btn) {
        btn.innerText = "✓ Copied!";
        setTimeout(() => btn.innerText = "📋 Copy Prompt for AI Practice", 2000);
    }
}

function escapeAttr(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function resetAll() {
    if (confirm("🚨 ATENÇÃO: Deseja apagar todo o seu progresso permanentemente?")) {
        localStorage.removeItem(storageKey);
        location.reload();
    }
}

function renderVocabLesson(index, lesson, area, p) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${index}`);
    if (activeNav) activeNav.classList.add('active');

    const wordsHTML = lesson.words.map(w => `
        <div class="vocab-row">
            <span class="vocab-word">${w.word}</span>
            <span class="vocab-def">${w.definition}</span>
            <button class="speak-btn" data-speak-text="${escapeAttr(w.word)}">🔊</button>
        </div>
    `).join('');

    area.innerHTML = `
        <div class="lesson-meta">
            <small class="lesson-module-tag">MODULE: VOCAB | LESSON ${lesson.id}</small>
        </div>

        <h1>${lesson.title}</h1>

        <div class="exercise-section">
            <h3>📖 Word List</h3>
            ${wordsHTML}
        </div>

        ${freeProductionHTML(index, p)}

        <div class="prompt-box">
            <div class="prompt-label">AI Conversation Practice</div>
            <code id="prompt-${index}">${lesson.llmPrompt}</code>
            <button class="btn btn-copy" id="copy-btn-${index}">
                📋 Copy Prompt for AI Practice
            </button>
        </div>
    `;

    area.scrollTop = 0;

    area.querySelectorAll('[data-speak-text]').forEach(btn => {
        btn.addEventListener('click', () => speak(btn.dataset.speakText));
    });

    const copyBtn = document.getElementById(`copy-btn-${index}`);
    if (copyBtn) {
        copyBtn.addEventListener('click', () => copyPrompt(index));
    }

    attachFreeProductionListeners(index);
}

window.onload = init;
