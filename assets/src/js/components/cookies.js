
export default function () {

  const ourCookies = document.querySelector('.cookies');



  if (ourCookies) {

    let cookiesCta = ourCookies.querySelector('.cookies-cta');

    cookiesCta.addEventListener('click', (e) => {
      ourCookies.classList.add('accepted');

      setTimeout( ()=> {
        ourCookies.classList.add('hidden');
      }, 600);

    });

  }


}
