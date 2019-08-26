
export default function () {

  
  let nav = document.querySelector('.navigation');



  if (nav) {

    let navDropdown = document.querySelector('.navigation-links');
    let navToggler = document.querySelector('.navigation-burger');
    let searchToggle = document.querySelector('.navigation-search');
    let searchClose = document.querySelector('.search-panel-search-close');

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

      if(isExpanded === 'false') {
        nav.classList.add('expanded');
      } else {
        nav.classList.remove('expanded');
      }
    });




  }


}
