'use strict'

let gulp      = require('gulp');
let ts        = require("gulp-typescript");
let project5  = ts.createProject("tsconfig-es5.json");
let project6  = ts.createProject("tsconfig-es6.json");

function jsVersion(project) {
  return 'es' + (4 + project.options.target);
}

function tsBuild(project) {
  return project.src()
    .pipe(ts(project)).js
    .pipe(gulp.dest('dist/' + jsVersion(project)));
}

gulp.task('build-es5', function () {
  return tsBuild(project5);
});

gulp.task('build-es6', function () {
  return tsBuild(project6);
});

gulp.task('default', ['build-es5', 'build-es6']);