const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

const oldSubmit = "onSubscribeSubmit={() => setActiveTab('facturation')}";
const newSubmit = `onSubscribeSubmit={async () => {
              const { submitBillingRequest } = await import('../lib/auth');
              const user = JSON.parse(localStorage.getItem('mock_user') || '{}');
              submitBillingRequest(user.email || 'unknown', 'Premium Course', 800);
              setActiveTab('facturation');
            }}`;

content = content.replace(oldSubmit, newSubmit);
fs.writeFileSync('src/components/Dashboard.tsx', content);
