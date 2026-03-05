/* ── FOCUS SESSION TIMER ── */

let sessionTimer     = null;
let sessionStartTime = null;
let sessionSeconds   = 15 * 60;
let sessionProductions = 0;
let sessionChallenges  = 0;
let sessionActive    = false;

function startSessionTimer() {
    if (sessionActive) return;
    sessionActive    = true;
    sessionStartTime = Date.now();
    sessionSeconds   = 15 * 60;
    sessionProductions = 0;
    sessionChallenges  = 0;

    renderSessionTimer();

    sessionTimer = setInterval(() => {
        sessionSeconds--;
        renderSessionTimer();
        if (sessionSeconds <= 0) endSession();
    }, 1000);
}

function renderSessionTimer() {
    const el = document.getElementById('session-timer');
    if (!el) return;
    const m = String(Math.floor(sessionSeconds / 60)).padStart(2, '0');
    const s = String(sessionSeconds % 60).padStart(2, '0');
    el.innerHTML = `
        <div class="session-timer-inner">
            <span class="session-label">SESSION</span>
            <span class="session-time ${sessionSeconds <= 60 ? 'urgent' : ''}">${m}:${s}</span>
            <div class="session-stats">
                <span>✍️ ${sessionProductions}</span>
                <span>🚀 ${sessionChallenges}</span>
            </div>
            <button class="session-end-btn" onclick="endSession()">End</button>
        </div>
    `;
}

function registerProduction(hadChallenge) {
    if (!sessionActive) startSessionTimer();
    sessionProductions++;
    if (hadChallenge) sessionChallenges++;
    renderSessionTimer();
}

function endSession() {
    if (!sessionActive) return;
    clearInterval(sessionTimer);
    sessionActive = false;

    const elapsed  = Math.floor((Date.now() - sessionStartTime) / 1000);
    const minutes  = Math.floor(elapsed / 60);
    const seconds  = elapsed % 60;
    const timeStr  = `${minutes}m ${seconds}s`;

    const area = document.getElementById('lesson-area');
    area.innerHTML = `
        <div class="session-summary">
            <div class="summary-icon">✦</div>
            <h2 class="summary-title">Session Complete</h2>
            <p class="summary-subtitle">Here's what you accomplished</p>
            <div class="summary-stats">
                <div class="summary-stat">
                    <span class="stat-value">${timeStr}</span>
                    <span class="stat-label">Time studied</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${sessionProductions}</span>
                    <span class="stat-label">Productions</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${sessionChallenges}</span>
                    <span class="stat-label">Challenges done</span>
                </div>
            </div>
            <button class="btn btn-check" onclick="closeSession()" style="max-width:200px; margin-top: 8px;">
                Continue Studying
            </button>
        </div>
    `;

    const timerEl = document.getElementById('session-timer');
    if (timerEl) timerEl.innerHTML = '';
}

function closeSession() {
    const area = document.getElementById('lesson-area');
    area.innerHTML = `
        <div style="text-align:center; padding: 60px 40px;">
            <h1 style="font-size:2rem;">👋 Welcome back!</h1>
            <p style="color: var(--text-muted);">Select a lesson to continue.</p>
        </div>
    `;
}