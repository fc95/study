'use strict';
/**
 * 打包预加载的前端资源文件
 * @param  {[type]} "webpack" [description]
 * @return {[type]}           [description]
 */
var fs = require('fs'),
  fsExtra = require('fs-extra'),
  UglifyJS = require('uglify-js'),
  uglifycss = require('uglifycss');

var prepareData = {
  js: {
    origin: ['../external/jquery/jquery.min.js', '../external/webupload/webuploader.min.js', '../external/lodash/lodash.min.js', '../external/moment/moment.min.js',  '../external/tween/tween.js', '../external/requirejs/require.js', '../external/avalon/avalon.js'],
    dist: '../dist/common/external.js',
  },
  css: {
    origin: ['../css/common/base.css', '../css/common/globalm.css', '../css/common/widgetm.css'],
    dist: '../dist/common/allm.css',
  }
};

//打包js
var result = UglifyJS.minify(prepareData.js.origin);

fsExtra.outputFileSync(prepareData.js.dist, result.code);
console.log('Info: Js prepare.');

//打包css
var uglified = uglifycss.processFiles(prepareData.css.origin, {});
fsExtra.outputFileSync(prepareData.css.dist, uglified);
console.log('Info: Css prepare.');

