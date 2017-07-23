'use strict';
var gulp = require('gulp');
var minify = require('gulp-clean-css');

var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var cache = require('gulp-cache');

var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

var less = require('gulp-less');
var path = require('path');

var livereload = require('gulp-livereload');

var concat = require('gulp-concat');

var jshint = require('gulp-jshint');


var cssBase64 = require('gulp-base64');
var del = require('del');


// 删除文件
gulp.task('clean', function(cb) {
    del(['dist/css/*', 'dist/js/*', 'dist/img/*','dist/views/*'], cb)
});

// 压缩ejs
gulp.task('ejs', function() {
  return gulp.src('views/**/*.ejs')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/views/'));
});

// 压缩less
gulp.task('less', function () {
  return gulp.src('public/less/**/*.less')
      .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(cssBase64())
      .pipe(minify())
      .pipe(gulp.dest('dist/css/'));
});


// 压缩js
gulp.task('js', function () {
    return gulp.src('public/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify({ compress: true }))
        .pipe(gulp.dest('dist/js/'))
});


// 压缩img
gulp.task('img', function() {  
  return gulp.src('public/img/**/*')        //引入所有需处理的Img
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))      //压缩图片
    // 如果想对变动过的文件进行压缩，则使用下面一句代码
    // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))) 
    .pipe(gulp.dest('dist/img/'))
    // .pipe(notify({ message: '图片处理完成' }));
});


// 浏览器同步，用7000端口去代理Express的3008端口
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3008",
        files: ["dist/views/*.*","dist/css/*.*","dist/js/*.*","dist/img/*.*"],
        browser: "google chrome",
        port: 7000
  });
});

// 开启Express服务
gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'bin/www'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
}); 

gulp.task('build',['clean','less','ejs','js','img'],function () {
    
});

gulp.task('default',['browser-sync'],function(){
  // 将你的默认的任务代码放这

    // 监听所有css文档
    gulp.watch('public/less/*.less', ['less']);

    // 监听所有.js档
    gulp.watch('public/js/*.js', ['js']);

    // 监听所有图片档
    gulp.watch('public/img/**/*', ['img']);
    // 监听ejs
    gulp.watch('views/**/*.ejs', ['ejs']);

   // 创建实时调整服务器 -- 在项目中未使用注释掉
  var server = livereload();
   // 监听 dist/ 目录下所有文档，有更新时强制浏览器刷新（需要浏览器插件配合或按前文介绍在页面增加JS监听代码）
  gulp.watch(['public/dist/**']).on('change', function(file) {
    server.changed(file.path);
  });
});


