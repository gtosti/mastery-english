const v = Date.now();
const files = [
    'modules/m1.js',
    'modules/m2.js',
    'modules/m3.js',
    'modules/m4.js',
    'vocab.js',
    'core.js',
    'voice.js',
    'ai.js'
];

files.forEach(file => {
    const s = document.createElement('script');
    s.src = `${file}?v=${v}`;
    s.async = false;
    document.head.appendChild(s);
});