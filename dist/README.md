# AntiDoom Chrome Extension

AntiDoom is a doom scrolling killing app for Chrome. It helps you break the cycle of endless scrolling on YouTube Shorts by alerting you and redirecting you to a more productive site after a customizable threshold.

## Features
- Detects excessive scrolling or arrow key usage on YouTube Shorts.
- Customizable trigger threshold, popup delay, and redirect site.
- Plays an alarm sound, shows a popup, and sends a browser notification when triggered.
- Designed to help you stop doom scrolling and reclaim your time.

## Installation

1. Clone or download this repository to your computer.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the `poper` folder.

## Usage
- Visit a YouTube Shorts page.
- Scroll or press the down arrow key. After your set threshold and delay, AntiDoom will alert you and redirect you.
- Click the extension icon to customize your settings directly from the popup.

## Files
- `manifest.json`: Extension manifest file.
- `content.js`: Main logic for detecting scrolling and showing alerts.
- `popup.html` & `popup.js`: Customization form in the extension popup.
- `options.html` & `options.js`: (Optional) Standalone options page.

## Note
- You may need to provide your own icons (`icon16.png`, `icon48.png`, `icon128.png`) or use placeholder images. 