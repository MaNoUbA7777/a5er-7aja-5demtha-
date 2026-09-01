const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// Replace all tabs onClick to handleTabClick
content = content.replace(/onClick=\{\(\) => setActiveTab\('emplois'\)\}/g, "onClick={() => handleTabClick('emplois')}");
content = content.replace(/onClick=\{\(\) => setActiveTab\('videoLessons'\)\}/g, "onClick={() => handleTabClick('videoLessons')}");
content = content.replace(/onClick=\{\(\) => setActiveTab\('exercises'\)\}/g, "onClick={() => handleTabClick('exercises')}");
content = content.replace(/onClick=\{\(\) => setActiveTab\('speaking'\)\}/g, "onClick={() => handleTabClick('speaking')}");
content = content.replace(/onClick=\{\(\) => setActiveTab\('offres'\)\}/g, "onClick={() => handleTabClick('offres')}");
content = content.replace(/onClick=\{\(\) => setActiveTab\('facturation'\)\}/g, "onClick={() => handleTabClick('facturation')}");
content = content.replace(/onClick=\{\(\) => setActiveTab\('profile'\)\}/g, "onClick={() => handleTabClick('profile')}");

fs.writeFileSync('src/components/Dashboard.tsx', content);
