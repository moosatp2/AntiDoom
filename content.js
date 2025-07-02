let downArrowCount = 0;
let triggerCount = 0;
let popupTimeout = null;
let timerStarted = false;
let customRedirectUrl = 'https://www.google.com/'; // Default, can be changed by user
let triggerThreshold = 2; // Default, can be changed by user
let popupDelay = 10; // Default in seconds, can be changed by user

// Listen for custom redirect site, threshold, and delay from storage
if (typeof chrome !== 'undefined' && chrome.storage) {
  chrome.storage.sync.get(['customRedirectUrl', 'triggerThreshold', 'popupDelay'], function(result) {
    if (result.customRedirectUrl) {
      customRedirectUrl = result.customRedirectUrl;
    }
    if (result.triggerThreshold) {
      triggerThreshold = result.triggerThreshold;
    }
    if (result.popupDelay) {
      popupDelay = result.popupDelay;
    }
  });
}

function handleTrigger() {
  triggerCount++;
  if (triggerCount === triggerThreshold && !timerStarted) {
    timerStarted = true;
    if (popupTimeout) clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => {
      showDoubleSpaceModal(triggerCount);
      downArrowCount = 0;
      triggerCount = 0;
      popupTimeout = null;
      timerStarted = false;
    }, popupDelay * 1000); // Customizable delay in seconds
  }
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowDown') {
    downArrowCount++;
    handleTrigger();
  }
});

document.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) { // Only count downward scrolls
    handleTrigger();
  }
});

function playAlarmSound() {
  const audio = document.createElement('audio');
  audio.src = 'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg';
  audio.autoplay = true;
  audio.style.display = 'none';
  document.body.appendChild(audio);
  audio.onended = () => document.body.removeChild(audio);
}

function showBrowserNotification(count) {
  if (typeof Notification !== 'undefined') {
    if (Notification.permission === 'granted') {
      new Notification('Alas! Alas! Alas!', {
        body: `You are killing your time. You have scrolled ${count} times.`
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Alas! Alas! Alas!', {
            body: `You are killing your time. You have scrolled ${count} times.`
          });
        }
      });
    }
  }
}

function showDoubleSpaceModal(count) {
  if (document.getElementById('double-space-modal')) return;

  // Pause the YouTube Shorts video if present
  const video = document.querySelector('video');
  if (video && !video.paused) {
    video.pause();
  }

  // Play alarm sound
  playAlarmSound();

  // Show browser notification
  showBrowserNotification(count);

  const modal = document.createElement('div');
  modal.id = 'double-space-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.background = 'rgba(0,0,0,0.3)';
  modal.style.zIndex = '10000';

  const content = document.createElement('div');
  content.style.background = '#fff0f0';
  content.style.width = '500px';
  content.style.height = '500px';
  content.style.display = 'flex';
  content.style.flexDirection = 'column';
  content.style.justifyContent = 'center';
  content.style.alignItems = 'center';
  content.style.padding = '0';
  content.style.borderRadius = '16px';
  content.style.boxShadow = '0 2px 24px rgba(255,0,0,0.3)';
  content.style.textAlign = 'center';
  content.style.border = '3px solid #ff2222';

  content.innerHTML = `
    <h1 style=\"color:#ff2222; font-size:2em; margin:0 0 16px 0; font-weight:bold;\">Alas! Alas! Alas!</h1>
    <p style=\"color:#b30000; font-size:1.2em; margin:0; font-weight:bold;\">You are killing your time</p>
    <div style=\"margin-top:16px; color:#ff2222; font-size:1.1em;\">You have scrolled ${count} times</div>
  `;

  // Close modal on click or Escape
  modal.addEventListener('click', (e) => {
    if (e.target === modal) document.body.removeChild(modal);
  });
  document.addEventListener('keydown', function escListener(ev) {
    if (ev.key === 'Escape') {
      if (document.getElementById('double-space-modal')) {
        document.body.removeChild(modal);
        document.removeEventListener('keydown', escListener);
      }
    }
  });

  modal.appendChild(content);
  document.body.appendChild(modal);

  // Redirect to custom site after showing the modal
  setTimeout(() => {
    window.location.href = customRedirectUrl;
  }, 3000); // 3 second delay to let user see the popup
} 