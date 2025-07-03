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
  const siteYoutubeInput = document.getElementById('site-youtube');
  const siteFacebookInput = document.getElementById('site-facebook');
  const siteInstagramInput = document.getElementById('site-instagram');
  const customSiteInput = document.getElementById('custom-site-input');
  const addCustomSiteBtn = document.getElementById('add-custom-site');
  const customSitesList = document.getElementById('custom-sites-list');
  let customSites = [];

  function renderCustomSites() {
    customSitesList.innerHTML = '';
    if (customSites.length === 0) {
      customSitesList.innerHTML = '<span style="color:#888;">No custom URLs added.</span>';
      return;
    }
    customSites.forEach((site, idx) => {
      const div = document.createElement('div');
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.gap = '6px';
      div.style.marginBottom = '4px';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = site.enabled;
      checkbox.addEventListener('change', () => {
        customSites[idx].enabled = checkbox.checked;
        saveCustomSites();
      });
      const label = document.createElement('span');
      label.textContent = site.url;
      label.style.flex = '1';
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.style.background = '#888';
      removeBtn.style.color = '#fff';
      removeBtn.style.border = 'none';
      removeBtn.style.borderRadius = '4px';
      removeBtn.style.padding = '2px 8px';
      removeBtn.style.cursor = 'pointer';
      removeBtn.addEventListener('click', () => {
        customSites.splice(idx, 1);
        saveCustomSites();
        renderCustomSites();
      });
      div.appendChild(checkbox);
      div.appendChild(label);
      div.appendChild(removeBtn);
      customSitesList.appendChild(div);
    });
  }

  function saveCustomSites() {
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({ customSites });
    }
  }

  addCustomSiteBtn.addEventListener('click', function() {
    const url = customSiteInput.value.trim();
    if (!url || !/^https?:\/\/.+/.test(url)) {
      status.textContent = 'Enter a valid URL (must start with http or https)';
      setTimeout(() => status.textContent = '', 2000);
      return;
    }
    if (customSites.some(site => site.url === url)) {
      status.textContent = 'URL already added.';
      setTimeout(() => status.textContent = '', 2000);
      return;
    }
    customSites.push({ url, enabled: true });
    saveCustomSites();
    renderCustomSites();
    customSiteInput.value = '';
  });

  // Load saved options
  if (chrome && chrome.storage && chrome.storage.sync) {
    chrome.storage.sync.get(['triggerThreshold', 'customRedirectUrl', 'popupDelay', 'analyticsEnabled', 'siteYoutube', 'siteFacebook', 'siteInstagram', 'customSites'], function(result) {
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
      siteYoutubeInput.checked = result.siteYoutube !== false; // default true
      siteFacebookInput.checked = result.siteFacebook !== false; // default true
      siteInstagramInput.checked = result.siteInstagram !== false; // default true
      customSites = Array.isArray(result.customSites) ? result.customSites : [];
      renderCustomSites();
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
    const siteYoutube = siteYoutubeInput.checked;
    const siteFacebook = siteFacebookInput.checked;
    const siteInstagram = siteInstagramInput.checked;
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({
        triggerThreshold: threshold,
        customRedirectUrl: redirect,
        popupDelay: delay,
        analyticsEnabled: analyticsEnabled,
        siteYoutube: siteYoutube,
        siteFacebook: siteFacebook,
        siteInstagram: siteInstagram,
        customSites: customSites
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