const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

if (!content.includes('Phone, Facebook, Instagram, Linkedin')) {
  content = content.replace(
    "import { Calendar, Video, CheckSquare, MessageCircle, LogOut, Tag, Receipt, Menu, X } from 'lucide-react';",
    "import { Calendar, Video, CheckSquare, MessageCircle, LogOut, Tag, Receipt, Menu, X, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';"
  );
}

const adminAndLogoutBlock = `{isAdmin && onGoToAdmin && (
          <button 
            onClick={onGoToAdmin}
            className="p-4 md:px-6 md:py-4 flex items-center gap-4 text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors border-t border-[#1A1A1A]/10 w-full text-left"
          >
            <Shield className="w-4 h-4 text-[#D4A373]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{(t as any).adminPanel || 'Admin Panel'}</span>
          </button>
        )}`;

const newContactSection = `        {/* Contacts & Socials Footer */}
        <div className="p-4 md:p-6 border-t border-[#1A1A1A]/10 bg-[#FAF7F2]/50 flex flex-col gap-4 mt-auto">
          <div className="flex flex-col gap-2">
            <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Nos contacts</h4>
            <a href="tel:+21654022351" className="text-xs font-medium text-[#1A1A1A] hover:text-[#D4A373] transition-colors flex items-center gap-2">
              <Phone className="w-3 h-3 text-[#D4A373]" />
              <span dir="ltr">+216 54 022 351</span>
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Réseaux sociaux</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 bg-white rounded border border-[#1A1A1A]/10 hover:border-[#D4A373] hover:text-[#D4A373] transition-all hover:scale-110">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 bg-white rounded border border-[#1A1A1A]/10 hover:border-[#D4A373] hover:text-[#D4A373] transition-all hover:scale-110">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 bg-white rounded border border-[#1A1A1A]/10 hover:border-[#D4A373] hover:text-[#D4A373] transition-all hover:scale-110">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {isAdmin && onGoToAdmin && (
          <button 
            onClick={onGoToAdmin}
            className="p-4 md:px-6 md:py-4 flex items-center gap-4 text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors border-t border-[#1A1A1A]/10 w-full text-left"
          >
            <Shield className="w-4 h-4 text-[#D4A373]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{(t as any).adminPanel || 'Admin Panel'}</span>
          </button>
        )}`;

content = content.replace(adminAndLogoutBlock, newContactSection);

fs.writeFileSync('src/components/Dashboard.tsx', content);
