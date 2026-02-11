document.addEventListener('DOMContentLoaded', () => {
    const startOverlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-btn');
    const appContainer = document.querySelector('.app-container');
    const body = document.body;

    // Audio Context & TTS Setup
    let synth = window.speechSynthesis;
    let voice = null;

    // Load voices
    function loadVoices() {
        const voices = synth.getVoices();
        // Try to find a clear English voice, or default
        voice = voices.find(v => v.lang.includes('en-US')) || voices[0];
    }
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();

    function speak(text) {
        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }
        if (text !== '') {
            const utterThis = new SpeechSynthesisUtterance(text);
            utterThis.voice = voice;
            utterThis.pitch = 1;
            utterThis.rate = 1;
            synth.speak(utterThis);
        }
    }

    // Start App (Initialize Audio context if needed, though TTS usually doesn't need explicit context like WebAudio)
    startBtn.addEventListener('click', () => {
        startOverlay.style.display = 'none';
        appContainer.style.display = 'flex';
        // Unlock audio on iOS/mobile
        speak(''); 
    });

    // Button Actions
    const buttons = document.querySelectorAll('button[data-voice]');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const text = btn.getAttribute('data-voice');
            const action = btn.getAttribute('data-action');
            
            // Audio Feedback
            speak(text);

            // Visual Feedback
            handleVisualFeedback(action);
        });
    });

    function handleVisualFeedback(action) {
        // Remove existing animation classes to restart them
        body.classList.remove('flash-red', 'flash-blue');
        void body.offsetWidth; // Trigger reflow

        if (action === 'stop' || action === 'pain') {
            body.classList.add('flash-red');
            // navigator.vibrate([500, 200, 500]); // Vibrate on supported devices
        } else {
            body.classList.add('flash-blue');
            // navigator.vibrate(200);
        }
    }

    // Modal Handling
    const modal = document.getElementById('custom-modal');
    const keyboardBtn = document.getElementById('keyboard-toggle');
    const closeStartBtn = document.getElementById('close-modal');
    const speakCustomBtn = document.getElementById('speak-custom');
    const customInput = document.getElementById('custom-text');

    keyboardBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        customInput.focus();
    });

    closeStartBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    speakCustomBtn.addEventListener('click', () => {
        const text = customInput.value;
        if (text) {
            speak(text);
            handleVisualFeedback('custom');
        }
    });
});
