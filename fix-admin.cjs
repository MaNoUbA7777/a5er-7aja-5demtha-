const fs = require('fs');
const file = 'src/components/AdminDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("import { db, auth } from '../lib/firebase';", "");
content = content.replace("import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';", "");

// mock admin
content = content.replace(/const q = query\(collection\(db, 'classes'\), orderBy\('date', 'desc'\)\);[\s\S]*?setClasses\(classesData\);/, "setClasses([]);");
content = content.replace(/await addDoc\(collection\(db, 'classes'\), newClassData\);/, "");
content = content.replace(/await addDoc\(collection\(db, 'video_archive'\), newVideoData\);/, "");
content = content.replace(/await updateDoc\(doc\(db, 'billing_requests', requestId\), \{\s*status: 'approved',\s*updatedAt: serverTimestamp\(\)\s*\}\);/, "");
content = content.replace(/await updateDoc\(doc\(db, 'billing_requests', requestId\), \{\s*status: 'rejected',\s*updatedAt: serverTimestamp\(\)\s*\}\);/, "");

fs.writeFileSync(file, content);
