"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMiniature = void 0;

var getMiniature = function getMiniature(url) {
  var video_url = url;
  var video_id = video_url.split('https://youtu.be/')[1];
  var video_Miniature = "https://img.youtube.com/vi/".concat(video_id, "/0.jpg");
  return video_Miniature;
};

exports.getMiniature = getMiniature;