const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const headEnd = `</head>`;
const metaToAdd = `    <link rel="icon" type="image/png" href="/logo.png" />
    <meta property="og:image" content="/og-banner.jpg" />
    <meta name="twitter:image" content="/og-banner.jpg" />
`;

content = content.replace('</head>', metaToAdd + '</head>');

fs.writeFileSync('index.html', content);
