const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

const duplicates = ['videoLessons', 'cancel', 'description', 'amount', 'status'];

// We can just remove the ones in the admin block.
// Wait, they are inside enAdditions, frAdditions, arAdditions.
// But we already wrote them into translations.ts.
// We can use a regex to remove the specific duplicate lines from the admin block.
// We know they were added right after `savePassword: "...",`

// It's easier to just remove the lines that have `    videoLessons: "...",`, `    cancel: "...",`, etc. if they are duplicated.
// Let's just find and remove the SECOND occurrence of each, or the FIRST.
// Actually, I can just remove them from the admin translation strings using sed or node script.

