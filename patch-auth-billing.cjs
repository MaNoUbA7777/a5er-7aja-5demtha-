const fs = require('fs');
let content = fs.readFileSync('src/lib/auth.ts', 'utf8');

content = content.replace(
  "export const submitBillingRequest = (userEmail: string, plan: string, amount: number) => {",
  "export const submitBillingRequest = (userEmail: string, plan: string, amount: number, receiptName?: string, userName?: string) => {"
);

content = content.replace(
  "const newReq = { id: Date.now().toString(), userEmail, date: new Date().toISOString(), plan, amount, status: 'pending' };",
  "const newReq = { id: Date.now().toString(), userEmail, userName: userName || 'Unknown', receiptName: receiptName || 'receipt.jpg', date: new Date().toISOString(), plan, amount, status: 'pending' };"
);

fs.writeFileSync('src/lib/auth.ts', content);
