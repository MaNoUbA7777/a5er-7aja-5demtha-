const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
content = content.replace(/src="\/Logo"/g, 'src="/logo.png"');
content = content.replace(/src="\/Logo.png"/g, 'src="/logo.png"');
fs.writeFileSync('src/components/Dashboard.tsx', content);
