const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

const parentOld = `<div className="p-6 border-b border-[#1A1A1A]/10 flex justify-between items-start">`;
const parentNew = `<div className="p-6 border-b border-[#1A1A1A]/10 flex justify-center items-start relative">`;
content = content.replace(parentOld, parentNew);

const btnOld = `<button 
            className="md:hidden p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#FAF7F2] rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>`;
          
const btnNew = `<button 
            className={\`md:hidden p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#FAF7F2] rounded absolute top-4 \${isRtl ? 'left-4' : 'right-4'}\`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>`;
          
content = content.replace(btnOld, btnNew);

fs.writeFileSync('src/components/Dashboard.tsx', content);
