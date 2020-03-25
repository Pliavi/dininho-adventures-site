const gulp = require("gulp"),
  stylus = require("gulp-stylus"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  pug = require("gulp-pug");

const ENV = process.env.NODE_ENV;

function processHTML() {
  return gulp
    .src("./src/index.pug")
    .pipe(pug())
    .pipe(gulp.dest("./public"));
}

function processCSS() {
  const plugins = [autoprefixer(), ENV === "prod" ? null : cssnano()];

  return gulp
    .src("./src/css/*.styl")
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./public"));
}

exports.watch = function() {
  processHTML();
  processCSS();
  gulp.watch(["./src/**/*.pug"], processHTML);
  gulp.watch(["./src/css/*.styl"], processCSS);
};
