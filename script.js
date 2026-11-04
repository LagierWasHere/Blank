// Update this list to change the work cards without touching the page layout.
const projects = [
  { number: "01", title: "Project name", type: "Web / 2024", tag: "Live" },
  { number: "02", title: "Another build", type: "Identity / 2023", tag: "Case study" },
  { number: "03", title: "A small experiment", type: "Creative / 2023", tag: "Explore" },
  { number: "04", title: "More to come", type: "Ongoing / 2025", tag: "In progress" },
];

// Replace this with your Discord user ID after enabling Developer Mode.
const DISCORD_USER_ID = "YOUR_DISCORD_USER_ID";
const LANYARD_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;

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

const presenceCard = document.querySelector("#discord-presence");
const avatar = document.querySelector("#discord-avatar");
const indicator = document.querySelector("#discord-indicator");
const name = document.querySelector("#discord-name");
const status = document.querySelector("#discord-status");
const spotifyLine = document.querySelector("#spotify-line");
const spotifySong = document.querySelector("#spotify-song");
const spotifyArtist = document.querySelector("#spotify-artist");

const statusLabels = {
  online: "Online",
  idle: "Away",
  dnd: "Do not disturb",
  offline: "Offline",
};

function showPresenceUnavailable(message) {
  presenceCard.dataset.state = "unavailable";
  name.textContent = "Discord not connected";
  status.textContent = message;
  indicator.className = "presence-indicator";
}

async function loadDiscordPresence() {
  if (DISCORD_USER_ID === "YOUR_DISCORD_USER_ID") {
    showPresenceUnavailable("Add your user ID in script.js to connect this card.");
    return;
  }

  try {
    const response = await fetch(LANYARD_URL);
    if (!response.ok) throw new Error(`Lanyard returned ${response.status}`);
    const { data } = await response.json();
    const user = data.discord_user;
    const avatarHash = user.avatar;

    name.textContent = user.global_name || user.username;
    status.textContent = statusLabels[data.discord_status] || "Offline";
    indicator.classList.add(data.discord_status || "offline");
    presenceCard.dataset.state = data.discord_status || "offline";

    if (avatarHash) {
      avatar.src = `https://cdn.discordapp.com/avatars/${user.id}/${avatarHash}.png?size=128`;
      avatar.alt = `${name.textContent}'s Discord avatar`;
    }

    if (data.listening_to_spotify && data.spotify) {
      spotifySong.textContent = data.spotify.song;
      spotifyArtist.textContent = data.spotify.artist;
      spotifyLine.hidden = false;
    }
  } catch (error) {
    showPresenceUnavailable("Presence is temporarily unavailable.");
    console.error("Could not load Discord presence:", error);
  }
}

loadDiscordPresence();
