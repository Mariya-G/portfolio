const gulp = require('gulp');
const concat = require('gulp-concat-css'); // склеивает все css в один при сборке
const plumber = require('gulp-plumber');
const del = require('del'); // удаляет лишнее в сборке, если не находит в исходниках
const browserSync = require('browser-sync').create(); // показывает изменения в реальном времени
const autoprefixer = require('autoprefixer'); // подставляет вендорные префиксы для браузеров, которым они нужны
const mediaquery = require('postcss-combine-media-query'); //способен найти все медиазапросы с одинаковым параметрами в исходниках и склеить их в один медиазапрос при сборке
const htmlMinify = require('html-minifier'); 

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
}

function html() {
  const options = {
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
    collapseWhitespace: true,
      minifyCSS: true,
      keepClosingSlash: true
  };
  return gulp.src('src/**/*.html')
        .pipe(plumber())
                .on('data', function(file) {
              const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
              return file.contents = buferFile
            })
                .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
} 

function css() {
  const plugins = [
    autoprefixer(),
    mediaquery()
  ];
  return gulp
    .src('src/blocks/**/*.css')
    .pipe(plumber())
    .pipe(concat('bundle.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({ stream: true }));
}

function images() {
  return gulp
    .src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({ stream: true }));
}

function clean() {
  return del('dist');
}

function watchFiles() {
  gulp.watch(['src/**/*.html'], html);
  gulp.watch(['src/blocks/**/*.css'], css);
  gulp.watch(['src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
}

const build = gulp.series(clean, gulp.parallel(html, css, images));
const watchapp = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.images = images;
exports.clean = clean;

exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp;
