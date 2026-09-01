const fs = require('fs');
const file = 'src/components/Dashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "interface DashboardProps {\n  onLogout: () => void;\n  platformLanguage: PlatformLanguage;\n  learningLanguage: Language;\n}",
  "interface DashboardProps {\n  onLogout: () => void;\n  platformLanguage: PlatformLanguage;\n  learningLanguage: Language;\n  isAdmin?: boolean;\n  onGoToAdmin?: () => void;\n}"
);

content = content.replace(
  "export default function Dashboard({ onLogout, platformLanguage, learningLanguage }: DashboardProps) {",
  "import { Shield } from 'lucide-react';\n\nexport default function Dashboard({ onLogout, platformLanguage, learningLanguage, isAdmin, onGoToAdmin }: DashboardProps) {"
);

content = content.replace(
  /<button\s*onClick=\{onLogout\}[\s\S]*?<\/button>/,
  `{isAdmin && onGoToAdmin && (
          <button 
            onClick={onGoToAdmin}
            className="p-4 md:px-6 md:py-4 flex items-center gap-4 text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors border-t border-[#1A1A1A]/10 w-full text-left"
          >
            <Shield className="w-4 h-4 text-[#D4A373]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{(t as any).adminPanel || 'Admin Panel'}</span>
          </button>
        )}
        <button 
          onClick={onLogout}
          className="p-4 md:px-6 md:py-6 flex items-center gap-4 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-red-50 hover:text-red-600 transition-colors border-t border-[#1A1A1A]/10 w-full text-left"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t.logout}</span>
        </button>`
);

fs.writeFileSync(file, content);
