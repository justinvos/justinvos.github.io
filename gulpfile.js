var gulp = require("gulp")
var sass = require("gulp-sass")

gulp.task("sass", [], function() {
  return gulp.src("./style/main.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./style/"))
})

gulp.task("sass:watch", function() {
  gulp.watch("./style/*.sass", ["sass"])
})
