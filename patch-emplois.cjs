const fs = require('fs');
let content = fs.readFileSync('src/components/Emplois.tsx', 'utf8');

// 1. Remove the Demo toggle state
content = content.replace(
  "// Toggle for demonstration purposes\n  const [isSubscribed, setIsSubscribed] = useState(false);",
  "// Check real subscription status\n  const user = JSON.parse(localStorage.getItem('mock_user') || '{}');\n  const isSubscribed = user.subscriptionStatus === 'active';"
);

// 2. Remove the Demo toggle UI
content = content.replace(
  /\{\/\* Demo Toggle \*\/\}[\s\S]*?<\/div>/,
  ""
);

// 3. Remove useState import if it's unused (or just leave it, it doesn't hurt much, but good to clean up if we can easily)

fs.writeFileSync('src/components/Emplois.tsx', content);
