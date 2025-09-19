# Hi, I’m Chanu (Chanu716) 👋

### Bridging creativity & code — Aspiring AI/ML Engineer • Full‑Stack Developer • Problem‑solver with a creative edge

I build web apps, explore ML, and contribute to open-source. I’m currently learning and building ML projects and enjoy combining machine learning with web applications. I’m open to collaborations, mentorships, and project work — especially ML + web app integrations. I’m also a contributor to open-source and a GSSoC 2025 participant.

---

### 🔗 Connect

- Portfolio / GitHub: [github.com/Chanu716](https://github.com/Chanu716)
- LinkedIn: https://www.linkedin.com/in/chanikya-716-karri
- Instagram: https://www.instagram.com/chanu_716
- Email: karrichanikya@gmail.com

---

### 🛠 Skills

<!-- Skill icons (from tandpfun/skill-icons) — add/remove icons as you like -->

<img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/html5/html5-original.svg" alt="HTML5" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/css3/css3-original.svg" alt="CSS3" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/python/python-original.svg" alt="Python" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/c/c-original.svg" alt="C" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/cplusplus/cplusplus-original.svg" alt="C++" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/vercel/vercel.svg" alt="Vercel" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/git/git-original.svg" alt="Git" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/github/github-original.svg" alt="GitHub" width="36" height="36"/> <img src="https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/mysql/mysql-original.svg" alt="MySQL" width="36" height="36"/>


---

### 📊 GitHub — stats & activity

<!-- Dark themed GitHub stats (replace `Chanu716` if you change username) -->

[![Chanu's GitHub stats](https://github-readme-stats.vercel.app/api?username=Chanu716&show_icons=true&theme=dark&hide_border=true)](https://github.com/Chanu716)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=Chanu716&layout=compact&theme=dark&hide_border=true)](https://github.com/Chanu716)

<!-- Contribution/activity graph (this is the popular repo-card style) -->

[![Activity Graph](https://activity-graph.herokuapp.com/graph?username=Chanu716&theme=github)](https://github.com/Chanu716)

---

### 🚀 Projects (highlights)

I keep my projects in my repositories — check my Portfolio repo for a curated list. I’m actively building ML experiments and web apps with ML integrations.

---

### 🐍 Snake — "Snake eating CHANU"

Below is an animated SVG that shows a snake "eating" the letters **C H A N U**. Save the SVG as `snake.svg` in the same repository as your `README.md`, then include it in your README with:

```md
![Snake eating CHANU](./snake.svg)
```

---

### How I can help / Collaborate

- Collaborating on ML + web projects
- Open-source contributions and mentorship
- Building full-stack apps and prototypes

---

#### Profile views

<div align="center">
  <a href="https://github.com/Chanu716">
    <img src="https://komarev.com/ghpvc/?username=Chanu716&style=flat-square&color=blue" alt="Profile views" />
  </a>
</div>

---

*Made with ❤️ — feel free to tell me any edits you want.*


---

<!-- ===== SNAKE SVG: save as snake.svg ===== -->

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 140" width="900" height="140">
  <!-- Background (transparent so it fits dark README) -->
  <rect width="100%" height="100%" fill="none" />

  <!-- Letters (C H A N U) placed along x-axis -->
  <g id="letters" font-family="Segoe UI, Roboto, sans-serif" font-weight="700" font-size="36" fill="#ffffff" opacity="1">
    <text id="tC" x="420" y="88">C</text>
    <text id="tH" x="490" y="88">H</text>
    <text id="tA" x="560" y="88">A</text>
    <text id="tN" x="630" y="88">N</text>
    <text id="tU" x="700" y="88">U</text>
  </g>

  <!-- Snake path (a smooth curve) -->
  <path id="snakePath" fill="none" stroke="transparent" d="M20 70 C 120 20, 220 120, 320 70 C 420 20, 520 120, 620 70 C 720 20, 820 120, 880 70"/>

  <!-- Snake head (a circle) -->
  <g id="snake">
    <circle id="head" r="12" fill="#39ff14" stroke="#0f0f0f" stroke-width="2"/>
    <!-- tongue -->
    <path id="tongue" d="M0,14 L0,26" stroke="#ff2d55" stroke-width="2" stroke-linecap="round" opacity="0">
      <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" begin="0s"/>
    </path>
  </g>

  <!-- Animate the head along the path and trigger letters to fade when reached -->
  <animateMotion xlink:href="#snake" dur="7s" repeatCount="indefinite">
    <mpath xlink:href="#snakePath" />
  </animateMotion>

  <!-- Multiple tiny body circles that follow with staggered motion -->
  <g id="body">
    <!-- generate 8 body segments -->
    <circle r="9" fill="#2ee67d" opacity="0.95"><animateMotion dur="7s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
    <circle r="8" fill="#2ad16b" opacity="0.9"><animateMotion dur="7s" begin="0.1s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
    <circle r="7" fill="#22c65f" opacity="0.85"><animateMotion dur="7s" begin="0.2s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
    <circle r="6" fill="#1fb651" opacity="0.8"><animateMotion dur="7s" begin="0.3s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
    <circle r="5" fill="#1aa244" opacity="0.75"><animateMotion dur="7s" begin="0.4s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
    <circle r="5" fill="#168f37" opacity="0.7"><animateMotion dur="7s" begin="0.5s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
    <circle r="4" fill="#0f7b2a" opacity="0.65"><animateMotion dur="7s" begin="0.6s" repeatCount="indefinite"><mpath xlink:href="#snakePath" /></animateMotion></circle>
  </g>

  <!-- Letter-eating effect: when the head passes certain path offsets, fade out letters -->
  <!-- We'll align timings roughly to the animateMotion progress (7s total). These <set> elements reduce opacity for each letter at given times. -->
  <set xlink:href="#tC" attributeName="opacity" to="0.12" begin="2.0s" dur="0.6s" fill="freeze" />
  <set xlink:href="#tH" attributeName="opacity" to="0.12" begin="2.6s" dur="0.6s" fill="freeze" />
  <set xlink:href="#tA" attributeName="opacity" to="0.12" begin="3.2s" dur="0.6s" fill="freeze" />
  <set xlink:href="#tN" attributeName="opacity" to="0.12" begin="3.8s" dur="0.6s" fill="freeze" />
  <set xlink:href="#tU" attributeName="opacity" to="0.12" begin="4.4s" dur="0.6s" fill="freeze" />

  <!-- small sparkle when letter eaten -->
  <g id="sparkles">
    <circle cx="420" cy="60" r="2" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="2.0s" repeatCount="1"/></circle>
    <circle cx="490" cy="60" r="2" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="2.6s" repeatCount="1"/></circle>
    <circle cx="560" cy="60" r="2" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="3.2s" repeatCount="1"/></circle>
    <circle cx="630" cy="60" r="2" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="3.8s" repeatCount="1"/></circle>
    <circle cx="700" cy="60" r="2" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="4.4s" repeatCount="1"/></circle>
  </g>

  <!-- small caption under SVG for accessibility -->
  <text x="20" y="130" font-size="10" fill="#9aa0a6">Snake animation — the snake travels a path and "eats" the letters C H A N U.</text>
</svg>
```

