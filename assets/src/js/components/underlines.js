

export default function () {

  
  let ctaLines = [...document.querySelectorAll('[data-underline]')];



  const theLines = {
    'shop-now': `<svg width="142px" height="4px" viewBox="0 0 142 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g class="line" transform="translate(1.000000, -23.000000)" stroke-width="1.5">
                            <g id="Group-2" transform="translate(-0.000000, 0.000000)">
                                <path d="M-8.52651283e-14,26 C67.6984035,22.7470736 49.5304018,25.358662 140,25" id="Path-4"></path>
                            </g>
                        </g>
                    </g>
                  </svg>`,
    'get-the-app': `<svg width="179px" height="4px" viewBox="0 0 179 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                            <g class="line" transform="translate(1.000000, -22.000000)" stroke-width="1.5">
                                <g id="Group">
                                    <path d="M0,25 C71.5,21 86.5304018,24.358662 177,24" id="Path-4-Copy"></path>
                                </g>
                            </g>
                        </g>
                    </svg>`,
    'visit-store': `<svg width="175px" height="4px" viewBox="0 0 175 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                            <g class="line" transform="translate(1.000000, -22.000000)" stroke-width="1.5">
                                <g id="Group">
                                    <path d="M-1.42108547e-14,25 C71.5,21 82.5304018,25.358662 173,25" id="Path-4-Copy"></path>
                                </g>
                            </g>
                        </g>
                    </svg>`,
    'view-more': `<svg width="162px" height="4px" viewBox="0 0 162 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                          <g class="line" transform="translate(0.000000, -22.000000)" stroke-width="1.5">
                              <g id="Group-11">
                                  <path d="M1,24.9753372 C65.815864,20.3294334 78.9878997,25.3919145 161,24.9753372" id="Path-4-Copy"></path>
                              </g>
                          </g>
                      </g>
                  </svg>`,
    'take-me-back': `<svg width="204px" height="4px" viewBox="0 0 204 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                              <g class="line" transform="translate(1.000000, -24.000000)" stroke-width="1.5">
                                  <g id="Group" transform="translate(-0.000000, 0.000000)">
                                      <path d="M0,26 C67.6984035,22.7470736 111.030402,27.358662 201.5,27" id="Path-4"></path>
                                  </g>
                              </g>
                          </g>
                      </svg>`,
    'shop-all': `<svg width="133px" height="4px" viewBox="0 0 133 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                          <g class="line" transform="translate(1.000000, -23.000000)" stroke-width="1.5">
                              <path d="M0,26 C67.9577844,22.0670018 40.183775,25.2245809 131,24.7909354" id="Path-4"></path>
                          </g>
                      </g>
                  </svg>`,
    'share': `<svg width="92px" height="6px" viewBox="0 0 92 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g class="line" transform="translate(1.000000, -20.000000)" stroke-width="1.5">
                          <g id="Group">
                              <path d="M0,25 C31,19.5 58.5,21 89.5,23" id="Path-4-Copy"></path>
                          </g>
                      </g>
                  </g>
              </svg>`,
    'see-all-testimonials': `<svg width="330px" height="4px" viewBox="0 0 330 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                      <g class="line" transform="translate(-2.000000, -23.000000)" stroke-width="1.5">
                                          <g id="Group-Copy-7">
                                              <path d="M3,26 C74.5,22 240.530402,26.358662 331,26" id="Path-4-Copy"></path>
                                          </g>
                                      </g>
                                  </g>
                              </svg>`,
    'learn-more': `<svg width="179px" height="4px" viewBox="0 0 179 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                            <g class="line" transform="translate(1.000000, -22.000000)" stroke-width="1.5">
                                <g id="Group">
                                    <path d="M-1.42108547e-14,25 C71.5,21 86.0304018,25.358662 176.5,25" id="Path-4-Copy"></path>
                                </g>
                            </g>
                        </g>
                    </svg>`,
    'explore': `<svg width="121px" height="5px" viewBox="0 0 121 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g class="line" transform="translate(-1.000000, -23.000000)" stroke-width="1.5">
                            <g id="Group-5">
                                <path d="M2.36816406,26.5253906 C70.0665676,23.2724642 30.5343081,24.5500683 121.003906,24.1914062" id="Path-4"></path>
                            </g>
                        </g>
                    </g>
                </svg>`,
    'contact-us': `<svg width="175px" height="5px" viewBox="0 0 175 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                            <g class="line" transform="translate(1.000000, -22.000000)" stroke-width="1.5">
                                <path d="M0,25.9800001 C96,19.5 82.5304018,25.358662 173,25" id="Path-4-Copy-2"></path>
                            </g>
                        </g>
                    </svg>`,
    'add-to-cart': `<svg width="186px" height="4px" viewBox="0 0 186 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                            <g class="line" transform="translate(1.000000, -23.000000)" stroke-width="1.5">
                                <path d="M-7.10542736e-14,24.9800001 C71.5,20.9800001 93,30 183.5,24" id="Path-4-Copy-2"></path>
                            </g>
                        </g>
                    </svg>`,
    'add-me-to-the-mix': `<svg width="288px" height="5px" viewBox="0 0 288 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                                  <g class="line" transform="translate(1.000000, -21.000000)" stroke-width="1.5">
                                      <path d="M0,25 C71.5,20.8910142 230,21.7284366 286,23.2538976" id="Path-4-Copy"></path>
                                  </g>
                              </g>
                          </svg>`
  }



  if (ctaLines.length !== 0) {

      ctaLines.forEach( (theLine) => {

        let lineName = theLine.getAttribute('data-line');
        let lineHolder = document.createElement('span');
        let lineColor = theLine.getAttribute('data-line-color');
        lineHolder.classList.add('line-wrapper')
        lineHolder.innerHTML = theLines[lineName];
        theLine.classList.add(`line-${lineColor}`);
        theLine.appendChild(lineHolder);

      });
      
  }
  
  
}
  