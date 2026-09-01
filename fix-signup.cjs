const fs = require('fs');
const file = 'src/components/Signup.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("import { auth, db } from '../lib/firebase';", "");
content = content.replace("import { createUserWithEmailAndPassword } from 'firebase/auth';", "");
content = content.replace("import { setDoc, doc, serverTimestamp } from 'firebase/firestore';", "");
content = content.replace("import { translations } from '../translations';", "import { translations } from '../translations';\nimport { createUserWithEmailAndPassword } from '../lib/auth';");

// find try block
content = content.replace(/try\s*\{[\s\S]*?\} catch/, `try {
      await createUserWithEmailAndPassword(formData.email, formData.password);
      // Let App.tsx handle navigation
    } catch`);

fs.writeFileSync(file, content);
