const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primaryNav');

if (primaryNav && !primaryNav.querySelector('[data-command-center-link]')) {
  const commandCenterLink = document.createElement('a');
  commandCenterLink.href = 'https://personal-project-command-center-pri.vercel.app/';
  commandCenterLink.target = '_blank';
  commandCenterLink.rel = 'noopener noreferrer';
  commandCenterLink.textContent = 'Command Center';
  commandCenterLink.dataset.commandCenterLink = 'true';

  const scheduleLink = primaryNav.querySelector('.schedule-link');
  if (scheduleLink) primaryNav.insertBefore(commandCenterLink, scheduleLink);
  else primaryNav.appendChild(commandCenterLink);
}

if (navToggle && primaryNav) {
  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    primaryNav.classList.remove('open');
  };

  navToggle.addEventListener('click', () => {
    const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(willOpen));
    navToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
    primaryNav.classList.toggle('open', willOpen);
  });

  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
}
