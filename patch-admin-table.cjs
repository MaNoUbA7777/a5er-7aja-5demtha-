const fs = require('fs');
let content = fs.readFileSync('src/components/AdminDashboard.tsx', 'utf8');

const tableHeaderRegex = /<th className="p-4 text-xs uppercase tracking-widest">\{\(t as any\)\.userEmail\}<\/th>/;
const newTableHeader = `<th className="p-4 text-xs uppercase tracking-widest">Date</th>
                    <th className="p-4 text-xs uppercase tracking-widest">User Info</th>
                    <th className="p-4 text-xs uppercase tracking-widest">Receipt</th>`;
                    
content = content.replace(tableHeaderRegex, newTableHeader);

const tableRowRegex = /<td className="p-4">\{b\.userEmail\}<\/td>/;
const newTableRow = `<td className="p-4 text-sm">{new Date(b.date).toLocaleDateString()}</td>
                      <td className="p-4">
                        <div className="font-bold text-sm">{b.userName}</div>
                        <div className="text-xs text-[#1A1A1A]/60">{b.userEmail}</div>
                      </td>
                      <td className="p-4">
                        <a href="#" className="text-blue-600 text-sm hover:underline">{b.receiptName}</a>
                      </td>`;

content = content.replace(tableRowRegex, newTableRow);

fs.writeFileSync('src/components/AdminDashboard.tsx', content);
