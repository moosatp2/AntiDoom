# 🚀 AntiDoom Chrome Extension - Installation Guide

## 📦 Installation Methods

### Method 1: Install from Source (Recommended for Developers)

1. **Download the Extension**
   - Clone this repository: `git clone https://github.com/moosatp2/AntiDoom.git`
   - Or download the ZIP file from GitHub

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in top-right corner)

3. **Load the Extension**
   - Click **"Load unpacked"** button
   - Select the extension folder (contains `manifest.json`)
   - Click **"Select Folder"**

4. **Verify Installation**
   - The AntiDoom extension should appear in your extensions list
   - You should see the AntiDoom icon in your Chrome toolbar

### Method 2: Install from Packaged Extension

1. **Download the Package**
   - Download `AntiDoom-Extension.zip` from the releases
   - Extract the ZIP file to a folder on your computer

2. **Install in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **"Load unpacked"** and select the extracted folder

### Method 3: Install from Distribution Package

1. **Use the Provided Package**
   - The `dist/` folder contains the ready-to-install extension
   - Follow Method 2 steps, but select the `dist/` folder

## 🎯 How to Use

1. **Visit Target Sites**
   - Go to YouTube Shorts, Facebook, or Instagram
   - The extension will automatically activate

2. **Customize Settings**
   - Click the AntiDoom icon in your toolbar
   - Adjust trigger threshold, redirect URL, and delay settings
   - Enable/disable specific sites

3. **Test the Extension**
   - Scroll down or press the down arrow key
   - After your set threshold, you'll see the "Alas! Alas! Alas!" popup
   - You'll be redirected to your chosen site after 3 seconds

## ⚙️ Configuration Options

- **Trigger Threshold**: Number of scrolls before alert (default: 2)
- **Redirect URL**: Where to send you after triggering (default: Google)
- **Popup Delay**: Time before showing alert (hours/minutes/seconds)
- **Site Targeting**: Enable/disable for YouTube, Facebook, Instagram
- **Custom Sites**: Add additional URLs with wildcard support
- **Analytics**: Track your usage patterns (optional)

## 🔧 Troubleshooting

### Extension Not Loading
- Ensure all files are present in the folder
- Check that `manifest.json` is in the root directory
- Verify Chrome is up to date

### Extension Not Working on Sites
- Check if the site is enabled in settings
- Ensure the site URL matches the patterns in `manifest.json`
- Try refreshing the page

### Permissions Issues
- The extension only requires storage permission
- No network access or personal data collection

## 📱 Supported Browsers

- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge (Chromium-based)
- ✅ Brave Browser
- ❌ Firefox (requires different manifest format)
- ❌ Safari (requires different extension format)

## 🔄 Updates

To update the extension:
1. Download the latest version
2. Remove the old extension from Chrome
3. Load the new version using the same process

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the console for error messages
3. Create an issue on the GitHub repository

---

**Happy productivity! 🎉** 