const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

// Paths configuration
const paths = {
  images: {
    src: "/src/assets/img/**/*.{jpg,jpeg,png,svg,gif}",
    dest: "/src/assets/img/optimized",
  },
};

// Optimize Images
function optimizeImages() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
}

// Watch task for changes
function watchImages() {
  gulp.watch(paths.images.src, optimizeImages);
}

exports.default = gulp.series(optimizeImages);
exports.watch = watchImages;
