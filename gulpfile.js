// Gulp modules
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const svgmin = require("gulp-svgmin");

// Webpack modules
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

// Setup bundler
const bundler = webpack(webpackConfig);

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
  return gulp
    .src(["./src/img/*", "!./src/img/*.svg"])
    .pipe(gulp.dest("./dist/img"));
}

function copySVG() {
  return gulp
    .src("./src/img/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("./dist/img"));
}

// Initialize server
function serve(done) {
  browserSync.init(
    {
      server: {
        baseDir: "./dist",
        //middleware: [
        //  webpackDevMiddleware(bundler, {
        //    publicPath: webpackConfig.output.publicPath,
        //    stats: { colors: true },
        //  }),
        //  webpackHotMiddleware(bundler),
        //],
      },
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
  gulp.watch("./src/img/*.svg").on("change", gulp.series(copySVG, reload));
}

exports.assets = assets;
exports.copy = gulp.parallel(copyHTML, copyImages);
//exports.default = defaultTask;
exports.develop = gulp.series(
  assets,
  copyHTML,
  copyImages,
  copySVG,
  styles,
  serve,
  watch
);
exports.styles = styles;
