import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'


const ttf = () => {
  return app.gulp.src(`${app.paths.src.ttf}`)
          .pipe(app.gulp.dest(`${app.paths.build.fonts}`))
}

const otfToTtf = () => {
  return app.gulp.src(app.paths.src.otf)
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'FONTS',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(fonter({
            formats: ['ttf']
          }))
          .pipe(app.gulp.dest(`${app.paths.srcFolder}/fonts/`))
}

const ttfToWoff = () => {
  return app.gulp.src(app.paths.src.ttf)
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'FONTS',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(fonter({
            formats: ['woff']
          }))
          .pipe(app.gulp.dest(app.paths.build.fonts))
          .pipe(app.gulp.src(app.paths.src.ttf))
          .pipe(ttf2woff2())
          .pipe(app.gulp.dest(app.paths.build.fonts))
}

const fonts = () => {
  return app.gulp.src(app.paths.src.fonts)
          .pipe(app.gulp.dest(app.paths.build.fonts))
}


export { ttf, otfToTtf, ttfToWoff, fonts }
