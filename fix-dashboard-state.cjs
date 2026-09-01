const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

const oldState = "const [activeTab, setActiveTab] = useState<'emplois' | 'videoLessons' | 'exercises' | 'speaking' | 'offres' | 'facturation' | 'profile'>('emplois');";
const newState = `const [activeTab, setActiveTab] = useState<'emplois' | 'videoLessons' | 'exercises' | 'speaking' | 'offres' | 'facturation' | 'profile'>('emplois');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };`;

if (!content.includes('isMobileMenuOpen')) {
  // It's definitely there in JSX, but not declared.
  content = content.replace(oldState, newState);
  fs.writeFileSync('src/components/Dashboard.tsx', content);
} else if (!content.includes('const [isMobileMenuOpen, setIsMobileMenuOpen]')) {
  content = content.replace(oldState, newState);
  fs.writeFileSync('src/components/Dashboard.tsx', content);
}
