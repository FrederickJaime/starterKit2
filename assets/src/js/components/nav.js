
export default function () {



  const navBreakpoint = window.matchMedia('(max-width: 992px)'); // breakpoint for mobile nav
  const mainNav = document.querySelector('.navigation-main .navigation-links');
  const topBarHolder = document.querySelector('.navigation-topbar .col-12');
  const topBarLinks = [...topBarHolder.querySelectorAll('a')];


  if (mainNav.length !== 0) {
     
    let navMobileCheck = function(e) {
      if (e.matches) {

        topBarLinks.forEach( (link) => {
          link.classList.add('topBarLink');
          mainNav.appendChild(link);
        });

      } else {
        
        let linksToPull = [...mainNav.querySelectorAll('.topBarLink')];
        
        if (linksToPull.length !== 0) {

          linksToPull.forEach( (link) => {
            link.classList.remove('topBarLink');
            topBarHolder.appendChild(link);
          });

        }

      }
    }
  
    navMobileCheck(navBreakpoint); //call on init
    navBreakpoint.addListener(navMobileCheck); //listener

  }


}
