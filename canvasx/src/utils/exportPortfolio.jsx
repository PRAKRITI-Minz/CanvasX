export default function exportPortfolio(blocks, projectName = "portfolio") {
  if (!blocks || blocks.length === 0) {
    alert("No blocks to export"); 
    return;
  }

 
  const sortedBlocks = [...blocks].sort((a, b) => a.y - b.y);

  let html = `
  <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>${projectName}</title>
        <style>
         * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  color: #111;
  background: #ffffff;
  line-height: 1.6;
}

header,
section,
footer {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px;
}

header.hero {
  padding-top: 120px;
  padding-bottom: 120px;
}
header.hero .subtitle {
  font-size: 1.2rem;
  margin-top: 8px;
  color: #444;
}

header.hero .subtitle.secondary {
  font-size: 1rem;
  color: #666;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 24px;
}

p {
  font-size: 1.05rem;
  color: #444;
  max-width: 700px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.gallery-item {
  background: #f4f4f4;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}


.pub-item {
  background: #f8f8f8;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
}

footer {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}
 
    </style>  
    </head>
    <body>
  `;

  sortedBlocks.forEach(block => {
    if (block.type === "Hero") {
  const lines = block.content.split("\n").filter(Boolean);

  html += `
    <header class="hero">
      <h1>${lines[0] || "Your Name"}</h1>
      ${lines[1] ? `<p class="subtitle">${lines[1]}</p>` : ""}
      ${lines[2] ? `<p class="subtitle secondary"> ${lines[2]}</p>` : ""}
    </header>
  `;
}


    if (block.type === "About") {
  const paragraphs = block.content
    .split("\n")
    .filter(Boolean)
    .map(p => `<p>${p}</p>`)
    .join("");

  html += `
    <section>
      <h2>About</h2>
      ${paragraphs}
    </section>
  `;
}

  if (block.type === "Publication") {
  const items = block.content
    .split("\n")
    .filter(Boolean)
    .map(item => `<div class="pub-item">${item}</div>`)
    .join("");

  html += `
    <section>
      <h2>Publications</h2>
      ${items}
    </section>
  `;
}

  if (block.type === "Gallery") {
  const items = block.content.split("\n").filter(Boolean);

  html += `
    <section class="gallery">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        ${items.map(item => `
          <div class="gallery-item">${item}</div>
        `).join("")}
      </div>
    </section>
  `;
}
if (block.type === "Contact") {
  let lines = block.content.split("\n").filter(Boolean);

  html += `
    <section>
      <h2>Contact</h2>
      ${lines.map(line => {
        if (line.includes("@")) {
          return `<p><a href="mailto:${line}">${line}</a></p>`;
        }
        return `<p>${line}</p>`;
      }).join("")}
    </section>
  `;
}

if (block.type === "Footer") {
  html += `
    <footer class="footer">
      <p>${block.content || "© 2025 My Portfolio"}</p>
    </footer>
  `;
}

  });
  html += `
    </div>
    </body>
    </html>
  `;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${projectName}.html`;
  a.click();

  URL.revokeObjectURL(url);
}
