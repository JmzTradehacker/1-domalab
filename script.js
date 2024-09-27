// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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
  
