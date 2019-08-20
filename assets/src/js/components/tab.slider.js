

export default function () {

  
    let tabSlider = document.querySelector('.tab-slider');
  
  
  
    if (tabSlider) {

        let tabSliderBtns = [...tabSlider.querySelectorAll('.tab-slider-btn')];
        let tabSliderMarker = document.querySelector('.tab-slider-thumb');
        
        let setThumb = function(btn) {
            let getIndex = parseInt(btn.getAttribute('data-slide-to'));
            let offset = 100 / tabSliderBtns.length;

            tabSliderMarker.style.left = `${getIndex*offset}%`;

        }

        tabSliderBtns.forEach( (btn) => {

            btn.addEventListener('click', (e) => {

                tabSliderBtns.forEach((restbtn) => {
                    restbtn.classList.remove('active');
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
    