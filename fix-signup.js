const fs = require('fs');
const file = 'src/components/Signup.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("import { auth, db } from '../lib/firebase';", "");
content = content.replace("import { createUserWithEmailAndPassword } from 'firebase/auth';", "");
content = content.replace("import { setDoc, doc, serverTimestamp } from 'firebase/firestore';", "");
content = content.replace("import { translations } from '../translations';", "import { translations } from '../translations';\nimport { createUserWithEmailAndPassword } from '../lib/auth';");

content = content.replace(/await createUserWithEmailAndPassword\(auth, formData\.email, formData\.password\);[\s\S]*?\/\/ Save user data/g, "const userCredential = await createUserWithEmailAndPassword(formData.email, formData.password);\n      // Save user data");

content = content.replace(/await setDoc\(doc\(db, 'users', userCredential\.user\.uid\), \{[\s\S]*?\}\);/, "");

fs.writeFileSync(file, content);
