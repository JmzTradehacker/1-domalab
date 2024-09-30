// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '/catalog',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' }
    ]
  },
  {
    text: 'orders',
    href: '/orders',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' }
    ]
  },
  {
    text: 'account',
    href: '/account',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'settings', href: '/account/settings' },
      { text: 'sign out', href: '/account/signout' }
    ]
  }
];

// Part 1: Getting Started

// 1. Select and cache the <main> element
const mainEl = document.querySelector('main');

// 2. Set the background color of mainEl
mainEl.style.backgroundColor = 'var(--main-bg)';

// 3. Set the content of mainEl
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// 4. Add a class of 'flex-ctr' to mainEl
mainEl.classList.add('flex-ctr');

// Part 2: Creating a Menu Bar

// 1. Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById('top-menu');

// 2. Set the height of topMenuEl
topMenuEl.style.height = '100%';

// 3. Set the background color of topMenuEl
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 4. Add a class of 'flex-around' to topMenuEl
topMenuEl.classList.add('flex-around');

// Part 3: Adding Menu Buttons

// Iterate over the menuLinks array
menuLinks.forEach(function(link) {
  // Create an <a> element
  const linkEl = document.createElement('a');

  // Add an href attribute
  linkEl.setAttribute('href', link.href);

  // Set the content of the <a> element
  linkEl.textContent = link.text;

  // Append the <a> element to topMenuEl
  topMenuEl.appendChild(linkEl);
});

// Part 4: Creating the Submenu

// Cache the <nav id="sub-menu"> element
const subMenuEl = document.createElement('nav');
subMenuEl.setAttribute('id', 'sub-menu');
document.querySelector('header').appendChild(subMenuEl);

// Set the height, background color, and flex properties of subMenuEl
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

// Initially hide the submenu by setting its position and top value
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Cache all <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Add event listener for top menu interactions
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  // Return if the clicked element is not an <a> element
  if (event.target.tagName !== 'A') return;

  // Log the clicked link
  console.log(event.target.textContent);

  // Remove 'active' class from all <a> elements
  topMenuLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked <a> element
  event.target.classList.add('active');

  // Show or hide submenu based on the clicked link
  const clickedLink = menuLinks.find(link => link.text === event.target.textContent);
  if (clickedLink && clickedLink.subLinks) {
    subMenuEl.style.top = '100%';
    buildSubmenu(clickedLink.subLinks);
  } else {
    subMenuEl.style.top = '0';
  }
});

// Function to build the submenu dynamically
function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array and create <a> elements
  subLinks.forEach(function(subLink) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', subLink.href);
    linkEl.textContent = subLink.text;
    subMenuEl.appendChild(linkEl);
  });
}

// Add event listener for submenu interactions
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  // Return if the clicked element is not an <a> element
  if (event.target.tagName !== 'A') return;

  // Log the clicked submenu link
  console.log(event.target.textContent);

  // Hide the submenu
  subMenuEl.style.top = '0';

  // Update the main content area with the clicked submenu item
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
