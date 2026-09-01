const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

content = content.replace(
  "submitBillingRequest(user.email || 'unknown', 'Premium Course', 800);",
  "submitBillingRequest(user.email || 'unknown', 'Premium Course', 800, 'receipt_' + Date.now() + '.jpg', user.name || user.email?.split('@')[0] || 'User');"
);

fs.writeFileSync('src/components/Dashboard.tsx', content);
