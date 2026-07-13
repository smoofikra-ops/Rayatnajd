const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/body\s*\{[\s\S]*?\}/, `body {
    @apply font-sans text-text-main overflow-x-hidden transition-colors duration-300;
    background: linear-gradient(-45deg, var(--bg-primary), #e6f4ea, var(--bg-secondary), #dcfce7);
    background-size: 400% 400%;
    animation: gradient-wave 20s ease infinite;
    min-height: 100vh;
}

.dark body {
    background: linear-gradient(-45deg, var(--bg-primary), #064e3b, var(--bg-secondary), #065f46);
    background-size: 400% 400%;
    animation: gradient-wave 20s ease infinite;
}`);
fs.writeFileSync('src/index.css', css);
