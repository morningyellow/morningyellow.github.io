const btn = document.getElementById('open');
const voucher = document.getElementById('voucher');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
  document.body.classList.add('opened');
  title.textContent = 'Merry Christmas Baby'; // change this text
  voucher.setAttribute('aria-hidden', 'false');
  // tiny delay so the browser registers the starting position
  requestAnimationFrame(() => requestAnimationFrame(() => voucher.classList.add('show')));
});