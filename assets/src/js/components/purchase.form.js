
export default function () {

  
  let purchaseForm = document.querySelector('.purchase-form');



  if (purchaseForm) {

    let additionalInfoCheckbox = document.querySelector('input[name="save-info"]');
    let additionalInfoContent = document.querySelector('.purchase-additional-info-holder');
    let additionalInfoHolder = document.querySelector('.purchase-additional-info');
  
    additionalInfoCheckbox.addEventListener('change', (e) => {

      

      if (e.target.checked) {
        additionalInfoHolder.classList.add('active');
        additionalInfoHolder.style.height = `${additionalInfoContent.offsetHeight}px`;
      } else {
        
        additionalInfoHolder.style.height = 0;
        setTimeout( () => {
          additionalInfoHolder.classList.remove('active');
        },350);
      }
    });

  }
  
  
}
  