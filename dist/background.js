chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'doubleSpace') {
    chrome.action.openPopup();
  }
}); 