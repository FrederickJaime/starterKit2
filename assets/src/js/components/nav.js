import getBreakpoint from './breakpoints';

export default function () {

  
  let nav = document.querySelector('.navigation');



  if (nav) {

    let navDropdown = document.querySelector('.navigation-links');
    let navToggler = document.querySelector('.navigation-burger');
    let searchToggle = document.querySelector('.navigation-search');
    let searchClose = document.querySelector('.search-panel-search-close');
    let shopToggle = document.querySelector('.navigation-shop');

    let mobileCheck = window.matchMedia(`(max-width: ${getBreakpoint('md')})`);
    let shopRedirect = shopToggle.getAttribute('data-redirect');
    

    navToggler.addEventListener('click', (e) => {

      if(!navDropdown.classList.contains('show')) {
        nav.classList.add('expanded');
      } else {
        nav.classList.remove('expanded');
      }

    });


    searchClose.addEventListener('click', (e) => {
      e.preventDefault();
      searchToggle.click();
    });

    searchToggle.addEventListener('click', (e) => {
      let isExpanded = searchToggle.getAttribute('aria-expanded');
      let shopOpen = shopToggle.getAttribute('aria-expanded');

      if (shopOpen === 'true') {
        shopToggle.click();
      }

      if(isExpanded === 'false') {
        nav.classList.add('expanded');
      } else {
        nav.classList.remove('expanded');
      }
    });

    shopToggle.addEventListener('click', (e) => {

      

      if (!mobileCheck.matches) {
        let searchOpen = searchToggle.getAttribute('aria-expanded');

        if (searchOpen === 'true') {
          searchToggle.click();
        }
      } else {
       window.location.href = shopRedirect;
      }


    });




  }


}
