const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const fetchPolyfillFix = `
    <script>
      // Fix for legacy polyfills/extensions trying to overwrite window.fetch
      const originalFetch = window.fetch;
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get: () => originalFetch,
        set: (val) => { 
          console.warn('Blocked attempt to overwrite window.fetch', val); 
        }
      });
    </script>
`;

if (!content.includes('Blocked attempt to overwrite window.fetch')) {
  content = content.replace('<head>', '<head>' + fetchPolyfillFix);
  fs.writeFileSync('index.html', content);
}
