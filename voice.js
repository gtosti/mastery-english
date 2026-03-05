
let activeRecognition = null; // Referência global para parar o microfone se trocar de lição

function startVoiceInput(index) {
    const btn      = document.getElementById(`mic-btn-${index}`);
    const textarea = document.getElementById(`free-prod-${index}`);
    const status   = document.getElementById(`mic-status-${index}`);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        status.innerText = '⚠️ Your browser does not support voice input. Try Chrome or Edge.';
        status.style.color = 'var(--secondary)';
        return;
    }

    if (activeRecognition) {
        activeRecognition.stop();
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;      // uma frase por vez
    recognition.interimResults = false;  // só resultado final

    activeRecognition = recognition;

    btn.innerText = '⏹️ Stop';
    btn.style.background = 'var(--secondary)';
    status.innerText = '🎙️ Listening... speak now';
    status.style.color = 'var(--accent)';

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const capitalized = transcript.charAt(0).toUpperCase() + transcript.slice(1);
        const current = textarea.value.trim();
        textarea.value = current ? current + ' ' + capitalized : capitalized;
        userProgress[index].freeDraft = textarea.value;
        saveProgress();
    };

    recognition.onend = () => {
        // Reinicia automaticamente se o usuário não parou manualmente
        if (activeRecognition) {
            recognition.start();
            status.innerText = '🎙️ Listening... keep speaking or press Stop';
        } else {
            stopRecognition(index);
            status.innerText = '✓ Done! Edit if needed.';
            status.style.color = 'var(--success)';
        }
    };

    recognition.onerror = (event) => {
        const messages = {
            'no-speech':     '🔇 No speech detected. Try again.',
            'audio-capture': '🎤 Microphone not found.',
            'not-allowed':   '🚫 Microphone permission denied.',
            'network':       '🌐 Network error.'
        };
        status.innerText = messages[event.error] || `❌ Error: ${event.error}`;
        status.style.color = 'var(--secondary)';
        stopRecognition(index);
    };

    recognition.start();
}

function stopRecognition(index) {
    if (activeRecognition) {
        try { activeRecognition.stop(); } catch(e) {}
        activeRecognition = null;
    }
    const btn    = document.getElementById(`mic-btn-${index}`);
    const status = document.getElementById(`mic-status-${index}`);
    if (btn) {
        btn.innerText = '🎤 Speak';
        btn.style.background = 'var(--success)';
    }
}
