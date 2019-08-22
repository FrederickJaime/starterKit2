

export default function () {

  
  let tabSliderText = document.querySelector('.tab-slider-text');



  if (tabSliderText) {

      let tabSliderBtns = [...tabSliderText.querySelectorAll('.nav-item')];
      let tabSliderMarker = tabSliderText.querySelector('.tab-slider-thumb');
      let tabSliderLabel = tabSliderText.querySelector('.nav-label');

      //let index = [...el.parentElement.childNodes].indexOf(el);

      
      let setThumb = function(btn) {
          let getIndex = parseInt(btn.getAttribute('data-slide-to'));
          let offset = 100 / tabSliderBtns.length;
          let srLabel = document.createElement('span');
          srLabel.classList.add('sr-only');
          srLabel.innerHTML = '(current)';
          let label = btn.querySelector('a').textContent;

          tabSliderLabel.innerHTML = label;
          btn.querySelector('a').appendChild(srLabel);  

          tabSliderMarker.style.left = `${getIndex*offset}%`;


      }

      tabSliderBtns.forEach( (btn) => {

          btn.addEventListener('click', (e) => {

              tabSliderBtns.forEach((restbtn) => {

                if (restbtn.classList.contains('active')){
                  restbtn.classList.remove('active');
                }
                  
              });
              
              btn.classList.add('active');
              setThumb(btn);

          });

      });

      tabSliderBtns.forEach((btn) => {
          if (btn.classList.contains('active')){
              setThumb(btn);
          }
      });

  }
  
  
}
  