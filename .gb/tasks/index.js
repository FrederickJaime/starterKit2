
const { series, parallel, watch, task } = require('gulp');
const config = require('../config');


/*
  SASS
  ============================
  Task to clean and compile and minified SASS
*/
import { sassCompile } from './sass';

/*
  JS
  ============================
  Task to clean and compile and minified SASS
*/
import { jsCompile } from './jscompile';
import { jsCompileMin } from './jscompile.min';

/*
  JS
  ============================
  Task to clean and compile and minified SASS
*/
import { vendorCompile } from './vendor';
/*
  Local development
  ============================
  These are the tasks for local development for
  testing and/or viewing items for the framework
*/
import { localViews } from './localViews';
import { localImages } from './localImages';
import { localServe } from './localServe';


let watchers = function() {

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

  const watchSass = watch(`${config.css.scssDir}/**/*`);
  watchSass.on('change', function(path, stats) {
    console.log('========== running SassCompile ==========');
    sassCompile();
  });

  const watchJs = watch([
    `${config.js.srcDir}/components/**/*`,
    `${config.js.srcDir}/main.js`
  ]);
  watchJs.on('change', function(path, stats) {
    console.log('========== running JsCompile ==========');
    jsCompile();
    //jsCompileMin();
  });

}


exports.devbuild = series(
  sassCompile,
  jsCompile,
  jsCompileMin,
  parallel(
    localViews,
    localImages,
  ),
  localServe,
  watchers
);

exports.prodbuild = series(
  sassCompile,
  jsCompileMin,
  parallel(
    localViews,
    localImages,
  )
);

