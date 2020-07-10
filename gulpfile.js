// Gulp modules
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// Webpack modules
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

// Other modules
const browserSync = require("browser-sync").create();

function assets() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join("\n")));
      }
      resolve();
    });
  });
}

function styles() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["defaults"],
      })
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

function copyHTML() {
  return gulp.src(["./src/*.html", "!./src/*prev*"]).pipe(gulp.dest("./dist"));
}

function copyImages() {
  return gulp.src("./src/img/*").pipe(gulp.dest("./dist/img"));
}

// Initialize server
function serve(done) {
  browserSync.init(
    {
      server: "./dist",
      port: 8080,
      host: "0.0.0.0",
    },
    done
  );
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("src/js/**/*.js", gulp.series(assets, reload));
  gulp.watch("./src/*.html").on("change", gulp.series(copyHTML, reload));
}

exports.assets = assets;
exports.copy = gulp.parallel(copyHTML, copyImages);
//exports.default = defaultTask;
exports.develop = gulp.series(
  assets,
  copyHTML,
  copyImages,
  styles,
  serve,
  watch
);
exports.styles = styles;
