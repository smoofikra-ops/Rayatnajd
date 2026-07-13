const fs = require('fs');

let content = fs.readFileSync('src/components/home/ProjectsPreview.tsx', 'utf8');

// Replace the map body with a ProjectCard
// I will just use sed or AST to rewrite the whole file because it's simpler.

