var gulp = require("gulp")
var sass = require("gulp-sass")

gulp.task("sass", [], function() {
  return gulp.src("./main.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"))
})

gulp.task("sass:watch", function() {
  gulp.watch(".", ["sass"])
})
