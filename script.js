const btn = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');

if (btn && links) {
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}
