const fs = require('fs');
let content = fs.readFileSync('src/lib/auth.ts', 'utf8');

if (!content.includes('submitBillingRequest')) {
  content += `

export const submitBillingRequest = (userEmail: string, plan: string, amount: number) => {
  const requests = JSON.parse(localStorage.getItem('mock_billing_requests') || '[]');
  const newReq = { id: Date.now().toString(), userEmail, date: new Date().toISOString(), plan, amount, status: 'pending' };
  requests.push(newReq);
  localStorage.setItem('mock_billing_requests', JSON.stringify(requests));
};

export const getBillingRequests = () => {
  return JSON.parse(localStorage.getItem('mock_billing_requests') || '[]');
};

export const updateBillingStatus = (id: string, status: string, userEmail: string) => {
  const requests = JSON.parse(localStorage.getItem('mock_billing_requests') || '[]');
  const index = requests.findIndex((r: any) => r.id === id);
  if (index > -1) {
    requests[index].status = status;
    localStorage.setItem('mock_billing_requests', JSON.stringify(requests));
  }
  
  if (status === 'approved') {
    const users = JSON.parse(localStorage.getItem('mock_users') || '[]');
    const userIndex = users.findIndex((u: any) => u.email === userEmail);
    if (userIndex > -1) {
      users[userIndex].subscriptionStatus = 'active';
      localStorage.setItem('mock_users', JSON.stringify(users));
      
      // If the currently logged in user is the one being approved
      const currentUser = JSON.parse(localStorage.getItem('mock_user') || '{}');
      if (currentUser.email === userEmail) {
        currentUser.subscriptionStatus = 'active';
        localStorage.setItem('mock_user', JSON.stringify(currentUser));
        window.dispatchEvent(new Event('auth_changed'));
      }
    }
  }
};
`;
  fs.writeFileSync('src/lib/auth.ts', content);
}
