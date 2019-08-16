
export default function () {


  const subscriptionOverlay = document.querySelector('.email-subscription');



  if (subscriptionOverlay) {

    let closeBtn = subscriptionOverlay.querySelector('.email-subscription-close');

    subscriptionOverlay.addEventListener('click',(e) => {
      const flyoutElement = document.querySelector('.email-subscription-holder');
      let targetElement = e.target; // clicked element
        
      do {
        if (targetElement == flyoutElement) {
            // Do nothing, just return.
            return;
        }
        // Go up the DOM.
          targetElement = targetElement.parentNode;
      } while (targetElement); 

      // Do something useful here.
      if(!subscriptionOverlay.classList.contains('hidden')) {
        closeBtn.click();
      }

    });

    closeBtn.addEventListener('click', (e) => {
      subscriptionOverlay.classList.add('closed');

      setTimeout( ()=> {
        subscriptionOverlay.classList.add('hidden');
      }, 600);

    });

  }


}
