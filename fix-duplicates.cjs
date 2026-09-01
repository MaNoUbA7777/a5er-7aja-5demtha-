const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

// I'll parse it or just replace the specific lines that I added wrongly.
// I added these specific lines:
// liveSessions: "...",
// emploisDuTemps: "...",

content = content.replace(/liveSessions: ".*?",\n/g, '');
content = content.replace(/emploisDuTemps: ".*?",\n/g, '');
content = content.replace(/emplois: "Emplois",/g, 'emplois: "Emplois",\n    emploisDuTemps: "Sessions en direct",');

fs.writeFileSync('src/translations.ts', content);
