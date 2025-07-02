document.addEventListener('DOMContentLoaded', function() {
  // Tab switching
  const tabCustomize = document.getElementById('tab-customize');
  const tabAnalytics = document.getElementById('tab-analytics');
  const contentCustomize = document.getElementById('content-customize');
  const contentAnalytics = document.getElementById('content-analytics');

  tabCustomize.addEventListener('click', function() {
    tabCustomize.classList.add('active');
    tabAnalytics.classList.remove('active');
    contentCustomize.classList.add('active');
    contentAnalytics.classList.remove('active');
  });
  tabAnalytics.addEventListener('click', function() {
    tabCustomize.classList.remove('active');
    tabAnalytics.classList.add('active');
    contentCustomize.classList.remove('active');
    contentAnalytics.classList.add('active');
    loadAnalytics();
  });

  // Customization form logic
  const thresholdInput = document.getElementById('threshold');
  const redirectInput = document.getElementById('redirect');
  const delayHoursInput = document.getElementById('delay-hours');
  const delayMinutesInput = document.getElementById('delay-minutes');
  const delaySecondsInput = document.getElementById('delay-seconds');
  const analyticsEnabledInput = document.getElementById('analytics-enabled');
  const resetAnalyticsBtn = document.getElementById('reset-analytics');
  const status = document.getElementById('status');

  // Load saved options
  if (chrome && chrome.storage && chrome.storage.sync) {
    chrome.storage.sync.get(['triggerThreshold', 'customRedirectUrl', 'popupDelay', 'analyticsEnabled'], function(result) {
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
      analyticsEnabledInput.checked = result.analyticsEnabled !== false; // default true
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
    const analyticsEnabled = analyticsEnabledInput.checked;
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({
        triggerThreshold: threshold,
        customRedirectUrl: redirect,
        popupDelay: delay,
        analyticsEnabled: analyticsEnabled
      }, function() {
        status.textContent = 'Options saved!';
        setTimeout(() => status.textContent = '', 2000);
      });
    }
  });

  resetAnalyticsBtn.addEventListener('click', function() {
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({
        analyticsDaily: 0,
        analyticsWeekly: 0,
        analyticsMonthly: 0
      }, function() {
        loadAnalytics();
        status.textContent = 'Analytics reset!';
        setTimeout(() => status.textContent = '', 2000);
      });
    }
  });

  function loadAnalytics() {
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.get(['analyticsDaily', 'analyticsWeekly', 'analyticsMonthly'], function(result) {
        const daily = result.analyticsDaily || 0;
        const weekly = result.analyticsWeekly || 0;
        const monthly = result.analyticsMonthly || 0;
        document.getElementById('analytics-daily').textContent = daily;
        document.getElementById('analytics-weekly').textContent = weekly;
        document.getElementById('analytics-monthly').textContent = monthly;
        // Bar chart: scale width by max value
        const max = Math.max(daily, weekly, monthly, 1);
        document.getElementById('bar-daily').style.width = (100 * daily / max) + '%';
        document.getElementById('bar-weekly').style.width = (100 * weekly / max) + '%';
        document.getElementById('bar-monthly').style.width = (100 * monthly / max) + '%';
      });
    }
  }
}); 