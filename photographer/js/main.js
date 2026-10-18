document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }
  document.querySelectorAll('.demo-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      if (message) message.textContent = 'Thank you! This is a demo website. Your message was not sent or saved.';
      form.reset();
    });
  });
  const dialog = document.querySelector('.lightbox');
  let largeImage = dialog?.querySelector('img') || null;
  const close = dialog?.querySelector('.lightbox-close');
  document.querySelectorAll('.lightbox-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (!dialog) return;
      if (!largeImage) { largeImage = document.createElement('img'); dialog.append(largeImage); }
      largeImage.src = trigger.dataset.full;
      largeImage.alt = trigger.dataset.alt || '';
      dialog.showModal();
    });
  });
  close?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
