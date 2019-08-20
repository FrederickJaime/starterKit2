
export default function () {

  
  let purchasePromoForm = document.querySelector('.purchase-form.promo-code');
  
  
  
  if (purchasePromoForm) {

    let promoFormSubmit = purchasePromoForm.querySelector('input[type="submit"]');
    let promoHolder = document.querySelector('.purchase-total .purchase-total-discount');
    let promoContent = promoHolder.querySelector('.purchase-total-item.discount');


    promoFormSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      promoHolder.classList.add('active');
      promoHolder.style.height = `${promoContent.offsetHeight}px`;

    });
    

    }
    
    
  }
    