import versionNumber from 'gulp-version-number'
import webpack from 'webpack-stream'
import { webpackConfig } from './../config/webpack.config.js'


const js = () => {
  return app.gulp.src(app.paths.src.js, { sourcemaps: true })
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'JS',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(webpack(webpackConfig))
          .pipe(app.plugins.replace(/@img\//g, 'img/'))
          // .pipe(app.plugins.if(app.isBuild, versionNumber({
          //       'value': '%DT%',
          //       'append': {
          //         'key': '_v',
          //         'cover': 0,
          //         'to': [ 'css', 'js' ]
          //       }
          //     }))
          //   )
          .pipe(app.gulp.dest(app.paths.build.js))
          .pipe(app.plugins.browserSync.stream())
}


export default js
