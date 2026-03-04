
let activeRecognition = null; // Referência global para parar o microfone se trocar de lição

function startVoiceInput(index) {
    const btn      = document.getElementById(`mic-btn-${index}`);
    const textarea = document.getElementById(`free-prod-${index}`);
    const status   = document.getElementById(`mic-status-${index}`);

    // Verifica suporte
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        status.innerText = '⚠️ Your browser does not support voice input. Try Chrome or Edge.';
        status.style.color = 'var(--secondary)';
        return;
    }

    // Se já está gravando, para
    if (activeRecognition) {
        activeRecognition.stop();
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;       // Continua gravando até o usuário parar
    recognition.interimResults = true;   // Mostra resultado parcial enquanto fala

    activeRecognition = recognition;

    // Estado: gravando
    btn.innerText = '⏹️ Stop';
    btn.style.background = 'var(--secondary)';
    status.innerText = '🎙️ Listening... speak now';
    status.style.color = 'var(--secondary)';

    let finalTranscript = textarea.value; // Preserva o que já estava escrito

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let newFinal = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                newFinal += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        if (newFinal) {
            finalTranscript += newFinal;
        }

        textarea.value = (finalTranscript + interimTranscript).trim();
        userProgress[index].freeDraft = textarea.value;
        saveProgress();
    };

    recognition.onerror = (event) => {
        const messages = {
            'no-speech':        '🔇 No speech detected. Try again.',
            'audio-capture':    '🎤 Microphone not found.',
            'not-allowed':      '🚫 Microphone permission denied. Allow access in your browser settings.',
            'network':          '🌐 Network error during recognition.'
        };
        status.innerText = messages[event.error] || `❌ Error: ${event.error}`;
        status.style.color = 'var(--secondary)';
        stopRecognition(index);
    };

    recognition.onend = () => {
        stopRecognition(index);
        if (textarea.value.trim()) {
            status.innerText = '✓ Voice input captured. Edit if needed, then check with AI.';
            status.style.color = 'var(--success)';
        } else {
            status.innerText = '';
        }
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
