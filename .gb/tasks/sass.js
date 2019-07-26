const { src, dest } = require('gulp');
const gulpMerge = require('merge-stream');
const sasslint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const discardcomments = require('postcss-discard-comments');
const sourcemaps = require('gulp-sourcemaps');
const  autoprefixer = require('autoprefixer');
const config = require('../config');


export function sassCompile(){ 

  let frameworkBuild = `${config.css.scssDir}/bss.sk.scss`;
  let plugins = [
    autoprefixer (),
    discardcomments()
  ];

  return gulpMerge(

    src([`${config.css.scssDir}/**/*`])
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError()),

    src(frameworkBuild)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error',sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    // adding name
    .pipe(rename({basename: 'sk'}))
    // sends to local app folder
    .pipe(dest(config.local.appcss))
    // sends to dist folder
    .pipe(dest(config.css.distDir)),

    src(frameworkBuild)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    // adding name
    .pipe(rename({basename: 'sk.min'}))
    // sends to local app folder
    .pipe(dest(config.local.appcss))
    // sends to dist folder
    .pipe(dest(config.css.distDir))

  );
  
}
