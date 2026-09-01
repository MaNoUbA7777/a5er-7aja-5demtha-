const fs = require('fs');
const file = 'src/components/AdminDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/import \{ db, auth \} from '\.\.\/lib\/firebase';/g, "");
content = content.replace(/import \{ collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy \} from 'firebase\/firestore';/g, "");

content = content.replace(/l\.createdAt\?\.toDate\(\)\.toLocaleString\(\)/g, "l.createdAt ? new Date(l.createdAt).toLocaleString() : ''");

fs.writeFileSync(file, content);
