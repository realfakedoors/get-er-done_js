const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function(done) {
    
  browserSync.init({
      server: {
        baseDir: "./dist",
        index: "page.html"
      }
  });

  gulp.watch("./dist/*.html").on('change', browserSync.reload);
  gulp.watch("./dist/*.css").on('change', browserSync.reload);
  gulp.watch("./dist/*.js").on('change', browserSync.reload);
  
  done();
});

gulp.task('default', gulp.series('serve'));