import '@babel/polyfill';
import 'whatwg-fetch';


import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';

import nav from './components/nav';
import contactForm from './components/contact.form.validation';
import pageVideos from './components/video';
import ourCookies from './components/cookies';
import backgroundImage from './components/background-image';



function documentReady(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

documentReady( function() {
  ourCookies();
  backgroundImage();
});
