// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '/orders', subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '/account', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Select and cache the <main> element
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Build the top menu
menuLinks.forEach(function(link) {
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

// Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

// Cache all <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Add event listener for top menu interactions
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  const link = event.target;
  if (link.tagName !== 'A') return;
  
  console.log(link.textContent);

  // Toggle active class
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    subMenuEl.style.display = 'none';
    return;
  }

  topMenuLinks.forEach(a => a.classList.remove('active'));
  link.classList.add('active');

  // Show or hide submenu
  const linkData = menuLinks.find(item => item.text.toLowerCase() === link.textContent.toLowerCase());
  if (linkData && linkData.subLinks) {
    buildSubmenu(linkData.subLinks);
    subMenuEl.style.display = 'flex';
  } else {
    subMenuEl.style.display = 'none';
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
  }
});

// Function to build the submenu dynamically
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

// Add event listener for submenu interactions
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  const link = event.target;
  if (link.tagName !== 'A') return;

  console.log(link.textContent);

  subMenuEl.style.display = 'none';
  topMenuLinks.forEach(a => a.classList.remove('active'));
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});