const fs = require('fs');
const file = 'src/components/AdminDashboard.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/const fetchData = async \(\) => \{[\s\S]*?fetchData\(\);/m, `const fetchData = async () => {
      setClasses([]);
      setVideos([]);
      setBillingRequests([]);
      setLogs([]);
      setUsers([]);
    };
    fetchData();`);
    
content = content.replace(/const handleAddClass = async \(e: React\.FormEvent\) => \{[\s\S]*?catch \(err\) \{/m, `const handleAddClass = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setNewClass({ title: '', date: '', startTime: '', endTime: '', zoomLink: '' });
      setIsAddingClass(false);
    } catch (err) {`);

content = content.replace(/const handleAddVideo = async \(e: React\.FormEvent\) => \{[\s\S]*?catch \(err\) \{/m, `const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setNewVideo({ title: '', subject: '', url: '', description: '' });
      setIsAddingVideo(false);
    } catch (err) {`);

content = content.replace(/const handleUpdateBillingStatus = async \(id: string, status: 'approved' | 'rejected'\) => \{[\s\S]*?catch \(err\) \{/m, `const handleUpdateBillingStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
    } catch (err) {`);

fs.writeFileSync(file, content);
