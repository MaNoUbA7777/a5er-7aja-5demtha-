const fs = require('fs');
const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add import
if (!content.includes("import Emplois from './Emplois';")) {
  content = content.replace(
    "import { PlatformLanguage",
    "import Emplois from './Emplois';\nimport { PlatformLanguage"
  );
}

// Replace the emplois section
const oldBlock = /\{activeTab === 'emplois' && \([\s\S]*?\}\)/;
const newBlock = `{activeTab === 'emplois' && (
          <Emplois platformLanguage={platformLanguage} onGoToOffres={() => setActiveTab('offres')} />
        )}`;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync(file, content);
