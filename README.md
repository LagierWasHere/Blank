# Lagier Was Here

A fast, one-page portfolio built with plain HTML, CSS, and JavaScript.

## Updating content

- Edit the `projects` list in `script.js` to update the work cards.
- Update the intro, about copy, and email directly in `index.html`.
- Adjust colors and spacing from the variables at the top of `styles.css`.

No build step or dependencies are required. Open `index.html` directly or serve the folder with any static web server.

## Discord presence setup

The presence card uses the free [Lanyard API](https://github.com/Phineas/lanyard) to show your Discord avatar, online status, and current Spotify track.

1. In Discord, open **User Settings → Advanced** and enable **Developer Mode**.
2. Click your profile, choose **Copy User ID**, and replace `YOUR_DISCORD_USER_ID` in `script.js`.
3. Join the [Lanyard Discord server](https://discord.gg/ur6F7M9) so Lanyard can read your presence.
4. Keep Discord open and connected to Spotify. The card updates when the page loads.

## Hosting with GitHub Pages

This repository includes a GitHub Actions workflow in `.github/workflows/deploy-pages.yml`. After pushing it, open **Settings → Pages** in GitHub and set **Source** to **GitHub Actions**. Each push to `main` will then publish the site at:

`https://lagierwashere.github.io/Blank/`