const fs = require('fs');

// 1. Update translations.ts
let t = fs.readFileSync('src/translations.ts', 'utf8');
t = t.replace(/emplois: "Emplois",/g, 'emplois: "Emplois",\n    liveSessions: "Sessions en direct",\n    emploisDuTemps: "Sessions en direct",');
t = t.replace(/emplois: "Emplois",/g, 'emplois: "Emplois",\n    liveSessions: "Live Sessions",\n    emploisDuTemps: "Live Sessions",');
t = t.replace(/emplois: "Emplois",/g, 'emplois: "Emplois",\n    liveSessions: "جلسات مباشرة",\n    emploisDuTemps: "جلسات مباشرة",');
fs.writeFileSync('src/translations.ts', t);

// 2. Update Dashboard.tsx
let d = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
// Fix the tab label to be t.liveSessions or t.emploisDuTemps
if (d.includes('t.emploisDuTemps')) {
  // It's there, but we ensure it works. 
  // Let's replace the tab key 'emplois' with 'liveSessions' for clarity if possible, 
  // or just leave it as 'emplois' and make sure the label is "Sessions en direct".
}

// Ensure Emplois component is rendered correctly.
if (!d.includes('<Emplois')) {
  const oldBlock = /{activeTab === 'emplois' && \([\s\S]*?\}\)/;
  const newBlock = `{activeTab === 'emplois' && (
          <Emplois platformLanguage={platformLanguage} onGoToOffres={() => setActiveTab('offres')} />
        )}`;
  d = d.replace(oldBlock, newBlock);
}

// Make sure Emplois is imported
if (!d.includes("import Emplois from './Emplois';")) {
  d = d.replace("import { PlatformLanguage", "import Emplois from './Emplois';\nimport { PlatformLanguage");
}

fs.writeFileSync('src/components/Dashboard.tsx', d);
