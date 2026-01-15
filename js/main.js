async function loadActivity() {
  const res = await fetch("data/activity.json");
  const data = await res.json();

  document.getElementById("activity").innerHTML = `
    <div class="card">
      <h3>TryHackMe</h3>
      <p class="muted">${data.tryhackme.username} · ${data.tryhackme.rank}</p>
      <ul>${data.tryhackme.focus.map(f => `<li>${f}</li>`).join("")}</ul>
    </div>
    <div class="card">
      <h3>GitHub</h3>
      ${data.github.projects.map(p =>
        `<p><strong>${p.name}</strong><br/><span class="muted">${p.description}</span></p>`
      ).join("")}
    </div>
  `;
}

async function loadContent() {
  const res = await fetch("data/content.json");
  const items = await res.json();

  const tags = [...new Set(items.flatMap(i => i.tags))];
  const tagBar = document.getElementById("tags");
  const list = document.getElementById("content");

  function render(filter) {
    list.innerHTML = "";
    items
      .filter(i => !filter || i.tags.includes(filter))
      .forEach(i => {
        list.innerHTML += `<li>
          <a>${i.title}</a>
          <div class="muted">${i.tags.join(", ")}</div>
        </li>`;
      });
  }

  tagBar.innerHTML = `<span class="tag active" onclick="selectTag(null)">All</span>` +
    tags.map(t => `<span class="tag" onclick="selectTag('${t}')">${t}</span>`).join("");

  window.selectTag = tag => {
    document.querySelectorAll(".tag").forEach(el => el.classList.remove("active"));
    if (event) event.target.classList.add("active");
    render(tag);
  };

  render(null);
}

document.addEventListener("DOMContentLoaded", () => {
  loadActivity();
  loadContent();
});