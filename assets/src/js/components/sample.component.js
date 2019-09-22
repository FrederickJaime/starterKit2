import getBreakpoint from './breakpoints';

export default function () {



  // Moving cta button
  // =================

  // placing button and containers in variables
  let calloutBtn = document.querySelector('.callout__cta');
  let calloutFirst = document.querySelector('.callout > div:first-child');
  let calloutLast = document.querySelector('.callout > div:last-child');

  // creating Breakpoint to watch out for.
  let mq = window.matchMedia(`screen and (min-width: ${getBreakpoint('md')})`);
  var mqCheck = function( mq ) {
    // removing btn
    calloutBtn.remove();
    // checking match
    if(mq.matches) {
      // append to first div
      calloutFirst.appendChild(calloutBtn);
    } else {
      // append to last div
      calloutLast.appendChild(calloutBtn);
    } 
  }
  
  // checks at runtime
  mqCheck(mq);
  
  // attaching eventListener
  mq.addListener(mqCheck);
  

  
  }
  