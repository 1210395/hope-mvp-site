const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('.nav-item')];
const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 3600);
}

function showView(viewId) {
  views.forEach((view) => view.classList.toggle('active-view', view.id === viewId));
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.view === viewId));
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

navItems.forEach((item) => item.addEventListener('click', () => showView(item.dataset.view)));
document.querySelectorAll('[data-view-link]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.viewLink)));
document.querySelector('#openContext').addEventListener('click', () => showView('context'));
document.querySelector('#startPod').addEventListener('click', () => showView('pod'));
document.querySelector('#showSources').addEventListener('click', () => showView('verify'));
document.querySelectorAll('.context-trigger').forEach((button) => button.addEventListener('click', () => {
  const focus = button.dataset.context === 'security' ? 'safety and operational control' : 'access and daily mobility';
  showToast(`This frame foregrounds ${focus}. Open Context notes to compare the missing information.`);
}));

document.querySelector('#messageForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#messageInput');
  const hint = document.querySelector('#messageHint');
  const message = input.value.trim();
  if (!message) return;
  const harmfulPattern = /(?:all\s+(?:israelis|palestinians|jews|arabs)|kill|hate\s+them)/i;
  if (harmfulPattern.test(message)) {
    hint.textContent = 'This demo paused the message for a moderator check. Try a specific question about the scenario.';
    hint.style.color = '#a34c3d';
    return;
  }
  const messageNode = document.createElement('div');
  messageNode.className = 'message other';
  messageNode.innerHTML = `<span class="avatar teal">Y</span><div><strong>You</strong><p></p></div>`;
  messageNode.querySelector('p').textContent = message;
  document.querySelector('#messages').append(messageNode);
  input.value = '';
  hint.textContent = 'Sent to this protected pod. A moderator can review any report.';
  hint.style.color = '';
  showToast('Your question was shared with the protected pod.');
});

document.querySelector('#reportButton').addEventListener('click', () => showToast('Demo report logged. In the live product, a moderator would review it with the pod safety policy.'));
