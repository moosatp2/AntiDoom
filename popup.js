document.addEventListener('DOMContentLoaded', function() {
  const thresholdInput = document.getElementById('threshold');
  const redirectInput = document.getElementById('redirect');
  const delayHoursInput = document.getElementById('delay-hours');
  const delayMinutesInput = document.getElementById('delay-minutes');
  const delaySecondsInput = document.getElementById('delay-seconds');
  const status = document.getElementById('status');

  // Load saved options
  if (chrome && chrome.storage && chrome.storage.sync) {
    chrome.storage.sync.get(['triggerThreshold', 'customRedirectUrl', 'popupDelay'], function(result) {
      if (result.triggerThreshold) thresholdInput.value = result.triggerThreshold;
      if (result.customRedirectUrl) redirectInput.value = result.customRedirectUrl;
      if (result.popupDelay) {
        const total = result.popupDelay;
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        delayHoursInput.value = h;
        delayMinutesInput.value = m;
        delaySecondsInput.value = s;
      }
    });
  }

  document.getElementById('popup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const threshold = parseInt(thresholdInput.value, 10);
    const redirect = redirectInput.value.trim();
    const h = parseInt(delayHoursInput.value, 10) || 0;
    const m = parseInt(delayMinutesInput.value, 10) || 0;
    const s = parseInt(delaySecondsInput.value, 10) || 0;
    const delay = h * 3600 + m * 60 + s;
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