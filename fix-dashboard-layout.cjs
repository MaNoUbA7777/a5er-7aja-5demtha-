const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// The aside string:
const oldAside = `<aside className={\`w-full md:w-64 bg-white border-\${isRtl ? 'l' : 'r'} border-[#1A1A1A]/10 flex flex-col shrink-0 relative z-20\`}>
        <div className="p-6 border-b border-[#1A1A1A]/10">
          <h1 className="text-2xl font-normal tracking-tight serif">
            Sonia<span className="text-[#D4A373] italic">Academy</span>
          </h1>
          <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 mt-1">
            {learningLanguage === 'french' ? (t as any).langFrench : learningLanguage === 'english' ? (t as any).langEnglish : (t as any).langItalian}
          </p>
        </div>`;

const newAside = `      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-[#1A1A1A]/10 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 hover:bg-[#FAF7F2] rounded transition-colors">
            <Menu className="w-6 h-6 text-[#1A1A1A]" />
          </button>
          <h1 className="text-xl font-normal tracking-tight serif">
            Sonia<span className="text-[#D4A373] italic">Academy</span>
          </h1>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#1A1A1A]/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={\`
        fixed inset-y-0 \${isRtl ? 'right-0' : 'left-0'} z-50
        w-64 bg-white border-\${isRtl ? 'l' : 'r'} border-[#1A1A1A]/10 flex flex-col shrink-0 
        transform transition-transform duration-300 ease-in-out
        \${isMobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full' : '-translate-x-full')}
        md:relative md:translate-x-0 md:flex
      \`}>
        <div className="p-6 border-b border-[#1A1A1A]/10 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-normal tracking-tight serif">
              Sonia<span className="text-[#D4A373] italic">Academy</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 mt-1">
              {learningLanguage === 'french' ? (t as any).langFrench : learningLanguage === 'english' ? (t as any).langEnglish : (t as any).langItalian}
            </p>
          </div>
          <button 
            className="md:hidden p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#FAF7F2] rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>`;

content = content.replace(oldAside, newAside);
fs.writeFileSync('src/components/Dashboard.tsx', content);
