import gulp from "gulp";
import paths from "./gulp/config/paths.js";
import plugins from "./gulp/config/plugins.js";
import server from "./gulp/tasks/server.js";
import cleanDist from "./gulp/tasks/cleanDist.js";
import html from "./gulp/tasks/html.js";
import js from "./gulp/tasks/js.js";
import scss from "./gulp/tasks/scss.js";
import img from "./gulp/tasks/img.js";
import { ttf, otfToTtf, ttfToWoff, fonts } from "./gulp/tasks/fonts.js";
import files from "./gulp/tasks/files.js";

// глобальные переменные
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  paths: paths,
  gulp: gulp,
  plugins: plugins,
};

// таск для конвертации шрифтов
gulp.task("optimize", async function () {
  return gulp.series(ttf, otfToTtf, ttfToWoff);
});

// основные задачи
const mainTasks = gulp.parallel(files, html, scss, js, img, fonts);

// наблюдатели за сменой файлов для пересборки
function watcher() {
  gulp.watch(paths.watch.files, files);
  gulp.watch(paths.watch.html, html);
  gulp.watch(paths.watch.scss, scss);
  gulp.watch(paths.watch.js, js);
  gulp.watch(paths.watch.img, img);
}

// сценарии
const dev = gulp.series(cleanDist, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(cleanDist, mainTasks);

gulp.task("default", dev);

export { dev, build };
