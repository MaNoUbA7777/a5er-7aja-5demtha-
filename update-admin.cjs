const fs = require('fs');
const file = 'src/components/AdminDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "interface AdminDashboardProps {\n  onLogout: () => void;\n  platformLanguage: PlatformLanguage;\n}",
  "import { ArrowLeft } from 'lucide-react';\n\ninterface AdminDashboardProps {\n  onLogout: () => void;\n  onBackToDashboard?: () => void;\n  platformLanguage: PlatformLanguage;\n}"
);

content = content.replace(
  "export default function AdminDashboard({ onLogout, platformLanguage }: AdminDashboardProps) {",
  "export default function AdminDashboard({ onLogout, onBackToDashboard, platformLanguage }: AdminDashboardProps) {"
);

// Add the "Back to Dashboard" button just before the logout button in the Admin Panel sidebar
content = content.replace(
  /<button onClick=\{onLogout\} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-red-50 text-red-600 rounded transition-colors mt-auto">/,
  `{onBackToDashboard && (
          <button onClick={onBackToDashboard} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 rounded transition-colors mt-auto mb-2">
            <ArrowLeft className="w-4 h-4" />
            {(t as any).backToDashboard || 'Back to Dashboard'}
          </button>
        )}
        <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-red-50 text-red-600 rounded transition-colors">`
);

fs.writeFileSync(file, content);
