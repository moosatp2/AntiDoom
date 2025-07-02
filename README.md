# Double Space Popup Chrome Extension

This Chrome extension displays a popup when you press the space bar twice in quick succession on any webpage.

## Installation

1. Clone or download this repository to your computer.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the folder containing these files.

## Usage

- Visit any webpage.
- Press the space bar twice quickly.
- The extension popup will appear, indicating that a double space was detected.

## Files
- `manifest.json`: Extension manifest file.
- `content.js`: Listens for double space presses.
- `background.js`: Handles popup logic.
- `popup.html`: The popup UI.

## Note
- You may need to provide your own icons (`icon16.png`, `icon48.png`, `icon128.png`) or use placeholder images. 