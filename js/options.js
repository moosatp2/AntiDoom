document.addEventListener('DOMContentLoaded', function() {
  const thresholdInput = document.getElementById('threshold');
  const redirectInput = document.getElementById('redirect');
  const delayInput = document.getElementById('delay');
  const status = document.getElementById('status');

  // Load saved options
  if (chrome && chrome.storage && chrome.storage.sync) {
    chrome.storage.sync.get(['triggerThreshold', 'customRedirectUrl', 'popupDelay'], function(result) {
      if (result.triggerThreshold) thresholdInput.value = result.triggerThreshold;
      if (result.customRedirectUrl) redirectInput.value = result.customRedirectUrl;
      if (result.popupDelay) delayInput.value = result.popupDelay;
    });
  }

  document.getElementById('options-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const threshold = parseInt(thresholdInput.value, 10);
    const redirect = redirectInput.value.trim();
    const delay = parseInt(delayInput.value, 10);
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({
        triggerThreshold: threshold,
        customRedirectUrl: redirect,
        popupDelay: delay
      }, function() {
        status.textContent = 'Options saved!';
        setTimeout(() => status.textContent = '', 2000);
      });
    }
  });
}); 