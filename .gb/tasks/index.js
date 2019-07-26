
const { series, parallel, watch, task } = require('gulp');
const config = require('../config');


/*
  SASS
  ============================
  Task to clean and compile and minified SASS
*/
import { sassCompile } from './sass';
/*
  Local development
  ============================
  These are the tasks for local development for
  testing and/or viewing items for the framework
*/
import { localViews } from './localViews';
import { localImages } from './localImages';
import { localServe } from './localServe';
import { localSass } from './localSass';


let watchers = function() {

  const watchLocalSass = watch(config.local.scssDir);
  watchLocalSass.on('change', function(path, stats) {
    console.log('========== running localSass ==========');
    localSass();
  });

  const watchLocalImages = watch(config.local.imagesDir);
  watchLocalImages.on('change', function(path, stats) {
    console.log('========== running localImages ==========');
    localImages();
  }).on('add', function(path, stats) {
    console.log('========== running localImages ==========');
    localImages();
  }).on('unlink', function(path, stats) {
    console.log('========== running localImages ==========');
    localImages();
  });

  const watchLocalViews = watch(config.local.viewsDir);
  watchLocalViews.on('change', function(path, stats) {
    console.log('========== running localViews ==========');
    localViews();
  });

  const watchSass = watch(`${config.css.scssDir}/*/**`);
  watchSass.on('change', function(path, stats) {
    console.log('========== running SassCompile ==========');
    sassCompile();
  });
}


exports.devbuild = series(
  sassCompile,
  parallel(
    localViews,
    localImages,
    localSass
  ),
  localServe,
  watchers
);

/*
exports.codebuild = series(
  parallel(
    sassClean,
  ),
  parallel(
    sassCompile,
    sassMinCompile,
  ),
 // jsCompile,
  //jsCompileMin,
);
*/





