
export default function () {

  
  const theForm = document.querySelector('.contact-form');


  if (theForm) {

    let formInputs = [...theForm.querySelectorAll('input:not([type="submit"]), textarea')];

    let inputValidate = function(theInput) {

      if (theInput.value === '') {
        theInput.classList.add('error');
        theInput.nextElementSibling.classList.add('error');
      } else {
        if (theInput.classList.contains('error')) {
          theInput.classList.remove('error');
          theInput.nextElementSibling.classList.remove('error');
        }
      }

    }

    let emailValidate = function (theInput) {
      let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!theInput.value.match(emailformat)) {
        theInput.classList.add('error');
        theInput.nextElementSibling.classList.add('error');
      } else {
        if (theInput.classList.contains('error')) {
          theInput.classList.remove('error');
          theInput.nextElementSibling.classList.remove('error');
        }
      }
    }

    formInputs.forEach( (thisInput) => {

      if (thisInput.getAttribute('name') === 'email') {
        
        thisInput.addEventListener('blur', () => {
          emailValidate(thisInput);
        }); 
      } else {

        thisInput.addEventListener('blur', () => {
          inputValidate(thisInput);
        }); 

      }

    });

  }


}
