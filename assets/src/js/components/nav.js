
export default function () {

  const navBreakpoint = window.matchMedia('(max-width: 992px)'); // breakpoint for mobile nav
  const mainNav = document.querySelector('.navigation-main .navigation-links');
  const topBarHolder = document.querySelector('.navigation-topbar .col-12');
  const topBarLinks = [...topBarHolder.querySelectorAll('a')];
  const burger = document.querySelector('.navigation-burger');
  const body = document.querySelector('body');


  if (mainNav.length !== 0) {

    let navBurgerCheck = function() {
      if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('no-scroll');
       
      } else {
        burger.classList.add('active');
        mainNav.classList.add('active');
        body.classList.add('no-scroll');
      }
    }
      
    let navMobileCheck = function(e) {
      if (e.matches) {

        topBarLinks.forEach( (link) => {
          link.classList.add('topBarLink');
          mainNav.appendChild(link);
        });

        mainNav.classList.add('mobile-ready');

      } else {
        
        let linksToPull = [...mainNav.querySelectorAll('.topBarLink')];
        
        if (linksToPull.length !== 0) {

          linksToPull.forEach( (link) => {
            link.classList.remove('topBarLink');
            topBarHolder.appendChild(link);
          });

        }

        mainNav.classList.remove('mobile-ready');
        if (burger.classList.contains('active')) {
          navBurgerCheck();
        }
      }
    }
  
    navMobileCheck(navBreakpoint); //call on init
    navBreakpoint.addListener(navMobileCheck); //listener

    // Mobile nav expand click event
    burger.addEventListener('click', (e) => {
      
      navBurgerCheck();

    });

  }


}
