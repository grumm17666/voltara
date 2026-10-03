const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const buyBtn = document.getElementById('buyBtn');
const cartMessage = document.getElementById('cartMessage');
buyBtn?.addEventListener('click', () => {
  buyBtn.innerHTML = 'ADDED ✓';
  cartMessage.textContent = 'VOLTARA Arctic Berry added to your charge. (Demo checkout)';
  setTimeout(() => { buyBtn.innerHTML = 'ADD TO CART <span>+</span>'; }, 1800);
});

document.querySelectorAll('.flavour-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.flavour-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});
