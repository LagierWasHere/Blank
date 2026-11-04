// Update this list to change the work cards without touching the page layout.
const projects = [
  { number: "01", title: "Project name", type: "Web / 2024", tag: "Live" },
  { number: "02", title: "Another build", type: "Identity / 2023", tag: "Case study" },
  { number: "03", title: "A small experiment", type: "Creative / 2023", tag: "Explore" },
  { number: "04", title: "More to come", type: "Ongoing / 2025", tag: "In progress" },
];

const workGrid = document.querySelector("#work-grid");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.className = "work-card";
  card.href = "#contact";
  card.innerHTML = `
    <div class="work-visual">
      <span class="work-number">${project.number}</span>
      <span class="work-tag">${project.tag}</span>
    </div>
    <div class="work-meta">
      <span>${project.title}</span>
      <span>${project.type}</span>
    </div>
  `;
  workGrid.append(card);
});

document.querySelector("#year").textContent = new Date().getFullYear();
