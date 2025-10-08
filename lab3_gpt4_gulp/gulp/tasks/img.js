import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'


const img = () => {
  return app.gulp.src(app.paths.src.img)
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'IMG',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.paths.build.img)))
          .pipe(app.plugins.if(app.isBuild, webp()))
          .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.paths.build.img)))
          .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.paths.src.img)))
          .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.paths.build.img)))
          .pipe(app.plugins.if(app.isBuild, imagemin({
                progressive: true,
                svgoPlugin: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 // 0 - 7
              }))
            )
          .pipe(app.gulp.dest(app.paths.build.img))
          .pipe(app.gulp.src(app.paths.src.svg))
          .pipe(app.gulp.dest(app.paths.build.img))
          .pipe(app.plugins.browserSync.stream())
}


export default img
