"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _youtube_utilitys = require("../utils/youtube_utilitys");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = {
  videoclips: [{
    id: 1,
    title: 'Tu dolor',
    artist: 'Alex Duvall, Kelvis Ochoa, El Micha',
    url: 'https://youtu.be/R7dxbVxbW4A',
    image: '',
    date: '2020-01-01'
  }, {
    id: 2,
    title: 'Video Clips 2',
    artist: 'Artist 2',
    url: 'https://youtu.be/kcgV4KLeYZk',
    image: '',
    date: '2020-01-01'
  }, {
    id: 3,
    title: 'Video Clips 3',
    artist: 'Artist 3',
    url: 'https://youtu.be/WVQk_q754DM',
    image: '',
    date: '2020-01-01'
  }, {
    id: 4,
    title: 'Video Clips 4',
    artist: 'Artist 4',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 5,
    title: 'Video Clips 5',
    artist: 'Artist 5',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 6,
    title: 'Video Clips 6',
    artist: 'Artist 6',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 7,
    title: 'Video Clips 7',
    artist: 'Artist 7',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 8,
    title: 'Video Clips 8',
    artist: 'Artist 8',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 9,
    title: 'Video Clips 9',
    artist: 'Artist 9',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 10,
    title: 'Video Clips 10',
    artist: 'Artist 10',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 11,
    title: 'Video Clips 11',
    artist: 'Artist 11',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 12,
    title: 'Video Clips 12',
    artist: 'Artist 12',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 13,
    title: 'Video Clips 13',
    artist: 'Artist 13',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 14,
    title: 'Video Clips 14',
    artist: 'Artist 14',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }, {
    id: 15,
    title: 'Video Clips 15',
    artist: 'Artist 15',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: '',
    date: '2020-01-01'
  }]
};

var matchVideoclipWithMiniature = function matchVideoclipWithMiniature() {
  var videoclips = initialState.videoclips;
  videoclips.forEach(function (videoclip) {
    videoclip.image = (0, _youtube_utilitys.getMiniature)(videoclip.url);
  });
  initialState.videoclips = videoclips;
};

matchVideoclipWithMiniature();

var useInitialState = function useInitialState() {
  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var getRecentVideoclips = function getRecentVideoclips() {
    var sortedVideoclips = state.videoclips.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return sortedVideoclips.slice(0, 5);
  };

  var getAllVideoclips = function getAllVideoclips() {
    var sortedVideoclips = state.videoclips.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return sortedVideoclips;
  };

  var getVideoclip = function getVideoclip(id) {
    return state.videoclips.find(function (videoclip) {
      return videoclip.id === id;
    });
  };

  var addVideoclip = function addVideoclip(videoclip) {
    setState(_objectSpread({}, state, {
      videoclips: [].concat(_toConsumableArray(state.videoclips), [videoclip])
    }));
  };

  var updateVideoclip = function updateVideoclip(id, videoclip) {
    setState(_objectSpread({}, state, {
      videoclips: state.videoclips.map(function (v) {
        return v.id === id ? videoclip : v;
      })
    }));
  };

  var deleteVideoclip = function deleteVideoclip(id) {
    setState(_objectSpread({}, state, {
      videoclips: state.videoclips.filter(function (v) {
        return v.id !== id;
      })
    }));
  };

  return {
    state: state,
    getRecentVideoclips: getRecentVideoclips,
    getAllVideoclips: getAllVideoclips,
    getVideoclip: getVideoclip,
    addVideoclip: addVideoclip,
    updateVideoclip: updateVideoclip,
    deleteVideoclip: deleteVideoclip
  };
};

var _default = useInitialState;
exports["default"] = _default;