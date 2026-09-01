const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// Replace the specific div that renders when activeTab === 'emplois'
const startIdx = content.indexOf("{activeTab === 'emplois' && (");
if (startIdx !== -1) {
  // Find the end of this block
  const nextBlockIdx = content.indexOf("{activeTab === 'videoLessons' && (");
  if (nextBlockIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(nextBlockIdx);
    const newBlock = `{activeTab === 'emplois' && (
          <Emplois platformLanguage={platformLanguage} onGoToOffres={() => setActiveTab('offres')} />
        )}\n        `;
    fs.writeFileSync('src/components/Dashboard.tsx', before + newBlock + after);
  }
}

