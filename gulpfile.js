'use strict';

var gulp      = require('gulp'),
    rename    = require('gulp-rename'),           // 重命名文件
    haml      = require('gulp-haml'),             // 转换haml文件为html
    connect   = require('gulp-connect'),          // 本地静态服务器
    compass   = require('gulp-compass'),          // 通过compass将scss文件输出为css
    uglify    = require('gulp-uglify'),           // 自动压缩js文件
    del       = require('del'),                   // 清除文件
    plumber   = require('gulp-plumber'),          // 错误处理方法
    sourceDir = 'mobile';  // 项目路径


//在开发中将haml转成html的任务
gulp.task('haml2html', function () {
    gulp.src(sourceDir + '/haml/indexmobile.haml')
        .pipe(plumber())
        .pipe(haml())
        .pipe(connect.reload())
        .pipe(gulp.dest(sourceDir));
});

//本地静态服务器
gulp.task('connect', function () {
    connect.server({
        root: sourceDir,
        port: 2333,
        livereload: true
    });
});

//将scss文件通过compass转成css文件
gulp.task('compass', function () {
    gulp.src(sourceDir + '/scss/mobile.scss')
        .pipe(plumber())
        .pipe(compass({
            css: sourceDir + '/css',
            sass: sourceDir + '/scss',
            image: sourceDir + '/images'
        }))
        .pipe(connect.reload())
        .pipe(gulp.dest(sourceDir + '/css'));
});

//在开发的过程中动态的压缩js文件
gulp.task('compress', function () {
    gulp.src(sourceDir + '/js/mobile.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename('mobile.min.js'))
        .pipe(connect.reload())
        .pipe(gulp.dest(sourceDir + '/js'));
});


gulp.task('watch', function () {
    gulp.watch(sourceDir + '/haml/indexmobile.haml', ['haml2html']);
    gulp.watch(sourceDir + '/scss/mobile.scss', ['compass']);
    gulp.watch(sourceDir + '/js/mobile.js', ['compress']);
});

//开发环境
gulp.task('dev', ['connect', 'watch']);

//项目开发完成后提交git
gulp.task('build', function (cb) {
    del([sourceDir + '/css', sourceDir + '/js/*.min.js', sourceDir + '/*.html'], cb);
});

gulp.task('default', function () {
    gulp.task('gitup');
});

