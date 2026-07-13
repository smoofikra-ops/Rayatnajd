const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace('min-height: 100vh;}.dark body {', 'min-height: 100vh;}\n.dark body {');
fs.writeFileSync('src/index.css', css);
