const fs = require('fs');
const file = 'src/components/AdminDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/const fetchData = async \(\) => \{[\s\S]*?fetchData\(\);\s*\} catch \(e\) \{\s*console\.error\(e\);\s*\}\s*\};/, `const fetchData = async () => {
    setClasses([]);
    setVideos([]);
    setBillingRequests([]);
    setLogs([]);
    setUsers([]);
  };`);

content = content.replace(/await logAction[\s\S]*?;/g, "");
content = content.replace(/await updateDoc[\s\S]*?;/g, "");

fs.writeFileSync(file, content);
