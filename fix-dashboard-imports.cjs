const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

content = content.replace(
  "import { Calendar, Video, CheckSquare, MessageCircle, LogOut, Tag, Receipt } from 'lucide-react';",
  "import { Calendar, Video, CheckSquare, MessageCircle, LogOut, Tag, Receipt, Menu, X } from 'lucide-react';"
);

fs.writeFileSync('src/components/Dashboard.tsx', content);
