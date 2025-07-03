# 🧪 AntiDoom Extension Testing Guide

## ✅ Installation Test

### Step 1: Install the Extension
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top-right toggle)
3. Click **"Load unpacked"**
4. Select the `dist/` folder from your project
5. Verify the extension appears in the list

### Step 2: Verify Extension Icon
- Look for the AntiDoom icon in your Chrome toolbar
- Click it to open the popup settings

## 🎯 Functionality Tests

### Test 1: Basic Settings
1. Click the AntiDoom icon
2. Verify you can see the "Customize" and "Analytics" tabs
3. Check that default values are loaded:
   - Trigger Threshold: 2
   - Redirect URL: https://www.google.com/
   - Popup Delay: 0h 0m 10s

### Test 2: YouTube Shorts Test
1. Go to `https://www.youtube.com/shorts/`
2. Scroll down 2 times (or press down arrow 2 times)
3. Wait 10 seconds
4. You should see:
   - "Alas! Alas! Alas!" popup
   - Alarm sound (if enabled)
   - Browser notification (if permitted)
   - Redirect to Google after 3 seconds

### Test 3: Facebook Test
1. Go to `https://www.facebook.com/`
2. Scroll down 2 times
3. Wait for the popup and redirect

### Test 4: Instagram Test
1. Go to `https://www.instagram.com/`
2. Scroll down 2 times
3. Wait for the popup and redirect

## ⚙️ Settings Tests

### Test 5: Customize Settings
1. Open the extension popup
2. Change trigger threshold to 1
3. Change redirect URL to `https://www.github.com/`
4. Set popup delay to 5 seconds
5. Click "Save"
6. Test on YouTube Shorts - should trigger after 1 scroll and redirect to GitHub

### Test 6: Site Toggle Test
1. In the popup, uncheck "YouTube Shorts"
2. Save settings
3. Go to YouTube Shorts and scroll - should NOT trigger
4. Re-enable YouTube Shorts and test again

### Test 7: Analytics Test
1. Click the "Analytics" tab
2. Trigger the extension a few times
3. Check that the numbers increase
4. Test the "Reset Analytics" button

## 🔧 Advanced Tests

### Test 8: Custom Sites
1. Add a custom URL like `https://www.reddit.com/*`
2. Enable it and save
3. Visit Reddit and scroll - should trigger

### Test 9: Escape Functionality
1. Trigger the popup
2. Press Escape key - popup should close
3. Click outside the popup - should close

### Test 10: Video Pause
1. Go to YouTube Shorts
2. Start playing a video
3. Trigger the extension
4. Video should pause when popup appears

## 🐛 Troubleshooting

### Extension Not Loading
- Check browser console for errors
- Verify all files are in the `dist/` folder
- Ensure `manifest.json` is valid

### Extension Not Triggering
- Check if the site is enabled in settings
- Verify the URL matches the patterns
- Check browser console for JavaScript errors

### Popup Not Appearing
- Check if notifications are blocked
- Verify popup delay settings
- Check browser console for errors

## 📊 Expected Results

| Test | Expected Outcome |
|------|------------------|
| Installation | Extension appears in toolbar |
| YouTube Shorts | Triggers after 2 scrolls, 10s delay |
| Facebook | Triggers after 2 scrolls, 10s delay |
| Instagram | Triggers after 2 scrolls, 10s delay |
| Settings | Changes persist after save |
| Analytics | Numbers increment correctly |
| Custom Sites | New URLs work with wildcards |

## 🎉 Success Criteria

Your extension is working correctly if:
- ✅ Installs without errors
- ✅ Appears in Chrome toolbar
- ✅ Triggers on target sites
- ✅ Shows popup with correct message
- ✅ Redirects to specified URL
- ✅ Settings save and load correctly
- ✅ Analytics track usage
- ✅ Custom sites work as expected

---

**If all tests pass, your AntiDoom extension is ready for use! 🚀** 