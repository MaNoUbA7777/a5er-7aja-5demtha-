const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// We need to add `user` to state
content = content.replace(
  "const [loading, setLoading] = useState(true);",
  "const [loading, setLoading] = useState(true);\n  const [user, setUser] = useState<any>(null);"
);

// We need to update handleAuth
content = content.replace(
  /const handleAuth = async \(user: any\) => \{[\s\S]*?setLoading\(false\);\n    \};/,
  `const handleAuth = async (user: any) => {
      setUser(user);
      if (user) {
        setAppState('dashboard');
      } else {
        setAppState('landing');
      }
      setLoading(false);
    };`
);

// We need to update the Dashboard component render
content = content.replace(
  /<Dashboard\s*platformLanguage=\{platformLanguage\}\s*learningLanguage=\{learningLanguage\}\s*onLogout=\{.*?\}\s*\/>/,
  `<Dashboard 
          platformLanguage={platformLanguage}
          learningLanguage={learningLanguage}
          isAdmin={user?.email === 'manouba139@gmail.com' || user?.role === 'admin'}
          onGoToAdmin={() => setAppState('admin_dashboard')}
          onLogout={() => signOut()} 
        />`
);

// We need to update AdminDashboard component render
content = content.replace(
  /<AdminDashboard\s*platformLanguage=\{platformLanguage\}\s*onLogout=\{.*?\}/,
  `<AdminDashboard 
          platformLanguage={platformLanguage}
          onBackToDashboard={() => setAppState('dashboard')}
          onLogout={() => signOut()}`
);

fs.writeFileSync(file, content);
