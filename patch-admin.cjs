const fs = require('fs');
let content = fs.readFileSync('src/components/AdminDashboard.tsx', 'utf8');

// Replace empty fetchData
content = content.replace(
  /const fetchData = async \(\) => \{[\s\S]*?\};/,
  `const fetchData = async () => {
    setClasses([]);
    setVideos([]);
    const { getBillingRequests } = await import('../lib/auth');
    setBillingRequests(getBillingRequests());
    const usersStr = localStorage.getItem('mock_users') || '[]';
    setUsers(JSON.parse(usersStr));
    setLogs([]);
  };`
);

// Replace empty handleBillingStatus
content = content.replace(
  /const handleBillingStatus = async \(id: string, status: string, userEmail: string\) => \{[\s\S]*?\};/,
  `const handleBillingStatus = async (id: string, status: string, userEmail: string) => {
    const { updateBillingStatus } = await import('../lib/auth');
    updateBillingStatus(id, status, userEmail);
    fetchData();
  };`
);

fs.writeFileSync('src/components/AdminDashboard.tsx', content);
