# 🤝 Contributing to AntiDoom

Thank you for your interest in contributing to AntiDoom! This document provides guidelines and information for contributors.

## 🎯 What is AntiDoom?

AntiDoom is a Chrome extension designed to help users break free from doom scrolling habits on social media platforms. It detects excessive scrolling behavior and provides gentle interventions to redirect users to more productive activities.

## 🚀 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug Reports** - Help us identify and fix issues
- 💡 **Feature Requests** - Suggest new features or improvements
- 📝 **Documentation** - Improve guides, README, or code comments
- 🔧 **Code Contributions** - Submit pull requests with fixes or features
- 🎨 **UI/UX Improvements** - Enhance the user interface
- 🌍 **Translations** - Help translate the extension to other languages
- 🧪 **Testing** - Test the extension and report issues

### Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/AntiDoom.git
   cd AntiDoom
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow the coding standards below
   - Test your changes thoroughly
   - Update documentation if needed

4. **Submit a Pull Request**
   - Provide a clear description of your changes
   - Include any relevant issue numbers
   - Ensure all tests pass

## 📋 Development Guidelines

### Code Standards

- **JavaScript**: Use ES6+ features, follow consistent formatting
- **HTML**: Use semantic HTML, ensure accessibility
- **CSS**: Use consistent naming conventions, prefer CSS Grid/Flexbox
- **Comments**: Add comments for complex logic
- **Error Handling**: Include proper error handling and validation

### File Structure

```
AntiDoom/
├── manifest.json          # Extension manifest
├── background.js          # Service worker
├── popup.html            # Extension popup UI
├── options.html          # Options page
├── js/                   # JavaScript files
│   ├── content.js        # Content script
│   ├── popup.js          # Popup logic
│   └── options.js        # Options logic
├── css/                  # Stylesheets
│   └── popup.css         # Popup styles
├── assets/               # Images and icons
└── docs/                 # Documentation
```

### Testing

Before submitting a pull request:

1. **Install the Extension**
   - Load the extension in Chrome developer mode
   - Test on all supported platforms (YouTube, Facebook, Instagram)

2. **Test Functionality**
   - Verify scroll detection works
   - Test popup appearance and behavior
   - Check settings persistence
   - Validate analytics tracking

3. **Cross-browser Testing**
   - Test on Chrome (primary)
   - Test on Edge (Chromium-based)
   - Test on Brave Browser

## 🐛 Reporting Bugs

When reporting bugs, please include:

- **Browser Version**: Chrome version and OS
- **Steps to Reproduce**: Clear, step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Console Errors**: Any JavaScript errors

## 💡 Suggesting Features

When suggesting features:

- **Clear Description**: Explain what the feature should do
- **Use Case**: Why is this feature needed?
- **Implementation Ideas**: How might it be implemented?
- **Priority**: Is this a nice-to-have or essential?

## 📝 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] Changes are tested manually
- [ ] Commit messages are clear and descriptive

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] UI/UX improvement

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Edge
- [ ] All functionality works as expected

## Screenshots
If applicable, add screenshots

## Related Issues
Closes #(issue number)
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📞 Getting Help

If you need help:

1. **Check Existing Issues** - Your question might already be answered
2. **Search Documentation** - Check README, INSTALLATION.md, TESTING.md
3. **Create an Issue** - Use the appropriate template
4. **Join Discussions** - Participate in GitHub Discussions

## 🎉 Recognition

Contributors will be recognized in:

- The project README
- Release notes
- GitHub contributors page

## 📄 License

By contributing to AntiDoom, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to making the web a more productive place! 🚀** 