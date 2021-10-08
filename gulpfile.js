const gulp = require("gulp");
const webpack = require("webpack-stream");
const less = require("gulp-less")(require("less"));

// const dist = "C:/Programs/openserver/OpenServer/domains/adminka/admin";

// gulp.task("copy-html", () => {
//    return gulp.src("./app/src/index.html")
//       .pipe(gulp.dest(dist))
// });

gulp.task("build-js", () => {
   return gulp.src("./js/main.js")
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: 'script.js'
         },
         watch: false,
         devtool: "source-map",
         module: {
            rules: [
               {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                     loader: 'babel-loader',
                     options: {
                        presets: [['@babel/preset-env', {
                           debug: true,
                           corejs: 3,
                           useBuiltIns: "usage"
                        }],
                           "@babel/react"]
                     }
                  }
               }
            ]
         }
      }))
      .pipe(gulp.dest("./js"))
});

gulp.task("build-less", () => {
   return gulp.src("./less/**/*.less")
      .pipe(less().on('error', less.logError))
      .pipe(gulp.dest('./css'))
});

// gulp.task("copy-api", () => {
//    return gulp.src("./app/api/**/*.*")
//       .pipe(gulp.dest(dist + "/api"))
// });


// gulp.task("copy-assets", () => {
//    return gulp.src("./app/assets/**/*.*")
//       .pipe(gulp.dest(dist + "/assets"))
// });

gulp.task("watch", () => {
   // gulp.watch("index.html", gulp.parallel("copy-html"));
   // gulp.watch("./app/assets/**/*.*", gulp.parallel("copy-assets"));
   // gulp.watch("./app/api/**/*.*", gulp.parallel("copy-api"));
   gulp.watch("./less/**/*.less", gulp.parallel("build-less"));
   gulp.watch("./js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("build-less", "build-js"));

gulp.task("default", gulp.parallel("watch", "build"));