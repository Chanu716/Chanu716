const axios = require("axios");
const fs = require("fs");

const username = "Chanu716"; 
const topCount = 5; // Number of repos for each section
const readmePath = "README.md";

(async () => {
  try {
    const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);

    // ----- Top Repos by Stars -----
    const topRepos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, topCount);

    const topMd = `
<details open>
  <summary><h2>📘 My Top Repositories</h2></summary>
  <p align="left">
${topRepos.map(r => `    <a href="${r.html_url}"><img width="278" src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${r.name}&theme=monokai&bg_color=1F222E&title_color=8B5CF6&hide_border=true&icon_color=A78BFA" alt="${r.name}"></a>`).join("\n")}
  </p>
  <a href="https://github.com/${username}?tab=repositories&sort=stargazers">
    <img alt="All Repositories" title="All Repositories" src="https://custom-icon-badges.demolab.com/badge/-Click%20Here%20For%20All%20My%20Repos-1F222E?style=for-the-badge&logoColor=white&logo=repo"/>
  </a>
</details>
`;

    // ----- Recent Repos by Updated Time -----
    const recentRepos = repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, topCount);

    const recentMd = `
<details open>
  <summary><h2>🆕 Recent Repositories</h2></summary>
  <p align="left">
${recentRepos.map(r => `    <a href="${r.html_url}"><img width="278" src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${r.name}&theme=monokai&bg_color=1F222E&title_color=8B5CF6&hide_border=true&icon_color=A78BFA" alt="${r.name}"></a>`).join("\n")}
  </p>
  <a href="https://github.com/${username}?tab=repositories&sort=updated">
    <img alt="See All Recent Repos" title="See All Recent Repos" src="https://custom-icon-badges.demolab.com/badge/-Browse%20Recent%20Repos-1F222E?style=for-the-badge&logoColor=white&logo=repo"/>
  </a>
</details>
`;

    // ----- Replace Sections in README -----
    let readme = fs.readFileSync(readmePath, "utf-8");

    readme = readme.replace(/<details open>\s*<summary><h2>📘 My Top Repositories<\/h2><\/summary>[\s\S]*?<\/details>/, topMd);
    readme = readme.replace(/<details open>\s*<summary><h2>🆕 Recent Repositories<\/h2><\/summary>[\s\S]*?<\/details>/, recentMd);

    fs.writeFileSync(readmePath, readme);
    console.log("README updated successfully!");
  } catch (err) {
    console.error(err);
  }
})();
