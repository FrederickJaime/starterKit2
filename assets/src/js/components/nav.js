
export default function () {

  
  let nav = document.querySelector('.navigation');



  if (nav) {

    let navDropdown = document.querySelector('.navigation-links');
    let navToggler = document.querySelector('.navigation-burger');

    navToggler.addEventListener('click', (e) => {

      if(!navDropdown.classList.contains('show')) {
        nav.classList.add('expanded');
      } else {
        nav.classList.remove('expanded');
      }

    });

  }


}
