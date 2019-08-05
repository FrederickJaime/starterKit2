
export default function () {


  const sectionVideos = [...document.querySelectorAll('.section-video')];



  if (sectionVideos.length !== 0 ) {

    sectionVideos.forEach( (vid) => {

      let playBtn = vid.querySelector('.video-poster');
      let thisVideo = vid.querySelector('video');

      playBtn.addEventListener('click', ()=> {
        playBtn.classList.add('active');
        thisVideo.play();
      });

      thisVideo.addEventListener('ended', ()=> {

        thisVideo.currentTime = 0;
        thisVideo.pause();
        playBtn.classList.remove('active');

      });
     
    });

  }


}
