# 🚀 AntiDoom Chrome Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Install-blue.svg)](https://chrome.google.com/webstore/detail/antidoom)
[![GitHub stars](https://img.shields.io/github/stars/moosatp2/AntiDoom.svg)](https://github.com/moosatp2/AntiDoom/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/moosatp2/AntiDoom.svg)](https://github.com/moosatp2/AntiDoom/issues)

> **Break free from doom scrolling and reclaim your time!** 

AntiDoom is a powerful Chrome extension designed to help you overcome the addictive scrolling behavior on social media platforms. It detects excessive scrolling and provides gentle interventions to redirect you to more productive activities.

## ✨ Features

- 🎯 **Smart Detection**: Monitors scrolling and arrow key usage on social media
- ⚙️ **Customizable Alerts**: Set your own trigger thresholds and delays
- 🎨 **Multiple Interventions**: Visual popups, audio alarms, and browser notifications
- 📊 **Usage Analytics**: Track your scrolling patterns (optional)
- 🌐 **Multi-Platform**: Works on YouTube Shorts, Facebook, Instagram, and custom sites
- 🔄 **Automatic Redirection**: Redirects to productive sites after triggering
- 🎮 **Video Pause**: Automatically pauses videos when alerts trigger

## 🚀 Quick Start

### Installation

1. **Download the Extension**
   ```bash
   git clone https://github.com/moosatp2/AntiDoom.git
   cd AntiDoom
   ```

2. **Install in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode** (top-right toggle)
   - Click **"Load unpacked"** and select the `dist/` folder

3. **Start Using**
   - Visit YouTube Shorts, Facebook, or Instagram
   - Scroll or press down arrow 2 times
   - Wait for the "Alas! Alas! Alas!" popup
   - Get redirected to Google after 3 seconds

### Alternative Installation

- **Download ZIP**: [AntiDoom-Extension.zip](https://github.com/moosatp2/AntiDoom/releases)
- **Chrome Web Store**: Coming soon!

## 🎯 How It Works

1. **Detection**: Monitors scroll events and arrow key presses
2. **Threshold**: Triggers after reaching your set limit (default: 2)
3. **Delay**: Waits for your specified delay (default: 10 seconds)
4. **Intervention**: Shows popup, plays sound, sends notification
5. **Redirection**: Automatically redirects to your chosen site

## ⚙️ Configuration

### Basic Settings

- **Trigger Threshold**: Number of scrolls before alert (1-50)
- **Redirect URL**: Where to send you after triggering
- **Popup Delay**: Time before showing alert (hours/minutes/seconds)
- **Site Targeting**: Enable/disable specific platforms

### Advanced Features

- **Custom Sites**: Add your own URLs with wildcard support
- **Analytics**: Track daily, weekly, and monthly usage
- **Sound Alerts**: Enable/disable audio notifications
- **Browser Notifications**: Desktop notifications (with permission)

## 📁 Project Structure

```
AntiDoom/
├── manifest.json          # Extension manifest
├── background.js          # Service worker
├── popup.html            # Extension popup UI
├── options.html          # Options page
├── js/                   # JavaScript files
│   ├── content.js        # Content script (main logic)
│   ├── popup.js          # Popup functionality
│   └── options.js        # Options page logic
├── css/                  # Stylesheets
│   └── popup.css         # Popup styles
├── assets/               # Images and icons
├── dist/                 # Distribution package
├── docs/                 # Documentation
└── README.md            # This file
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Follow the testing guide
open TESTING.md
```

Or test manually:
1. Install the extension
2. Visit YouTube Shorts
3. Scroll 2 times
4. Wait 10 seconds
5. Verify popup appears and redirects

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/moosatp2/AntiDoom.git
cd AntiDoom

# Install dependencies (if any)
npm install

# Load in Chrome for development
# Follow installation steps above
```

## 🐛 Bug Reports

Found a bug? Please report it:

1. Check existing [issues](https://github.com/moosatp2/AntiDoom/issues)
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser version and OS

## 💡 Feature Requests

Have an idea? We'd love to hear it!

1. Check existing [discussions](https://github.com/moosatp2/AntiDoom/discussions)
2. Create a new discussion or issue
3. Describe the feature and its benefits

## 📊 Analytics & Privacy

- **No Data Collection**: We don't collect or transmit any personal data
- **Local Storage**: All settings and analytics stored locally
- **Optional Analytics**: Usage tracking can be disabled
- **Privacy First**: Your browsing habits stay private

## 🔒 Security

We take security seriously. Please report vulnerabilities through GitHub:

- **Security Advisories**: [Report a vulnerability](https://github.com/moosatp2/AntiDoom/security/advisories)
- **Security Policy**: [SECURITY.md](SECURITY.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Chrome Extensions API**: For the powerful extension platform
- **Contributor Covenant**: For the Code of Conduct template
- **Open Source Community**: For inspiration and best practices

## 📞 Support

- **Documentation**: [INSTALLATION.md](INSTALLATION.md), [TESTING.md](TESTING.md)
- **Issues**: [GitHub Issues](https://github.com/moosatp2/AntiDoom/issues)
- **Discussions**: [GitHub Discussions](https://github.com/moosatp2/AntiDoom/discussions)
- **Issues**: [GitHub Issues](https://github.com/moosatp2/AntiDoom/issues)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=moosatp2/AntiDoom&type=Date)](https://star-history.com/#moosatp2/AntiDoom&Date)

---

**Made with ❤️ to help you be more productive!**

[![GitHub contributors](https://img.shields.io/github/contributors/moosatp2/AntiDoom.svg)](https://github.com/moosatp2/AntiDoom/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/moosatp2/AntiDoom.svg)](https://github.com/moosatp2/AntiDoom/commits/main)
[![GitHub release](https://img.shields.io/github/release/moosatp2/AntiDoom.svg)](https://github.com/moosatp2/AntiDoom/releases)
