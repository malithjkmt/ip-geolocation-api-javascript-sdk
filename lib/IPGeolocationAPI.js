'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeolocationParams = require('./GeolocationParams.js');
var TimezoneParams = require('./TimezoneParams.js');

module.exports = function () {
    function IPGeolocationAPI() {
        var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, IPGeolocationAPI);

        this.apiKey = apiKey;
    }

    _createClass(IPGeolocationAPI, [{
        key: 'getApiKey',
        value: function getApiKey() {
            return this.apiKey;
        }
    }, {
        key: 'getGeolocation',
        value: function getGeolocation() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var callback = arguments[1];

            if (params && params.getIPList()) {
                return postRequest("ipgeo-bulk", params, this.apiKey, callback);
            } else {
                return getRequest("ipgeo", buildGeolocationUrlParams(params, this.apiKey), callback);
            }
        }
    }, {
        key: 'getTimezone',
        value: function getTimezone() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var callback = arguments[1];

            return getRequest("timezone", buildTimezoneUrlParams(params, this.apiKey), callback);
        }
    }]);

    return IPGeolocationAPI;
}();

function buildTimezoneUrlParams() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var apiKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    var urlParams = "";

    if (apiKey) {
        urlParams = urlParams.concat("apiKey=", apiKey);
    }

    if (params) {
        var ip = params.getIP();

        if (ip) {
            if (urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("ip=", ip);
        }

        var tz = params.getTimezone();

        if (tz) {
            if (urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("tz=", tz);
        }

        var latitude = params.getLatitude();
        var longitude = params.getLongitude();

        if (latitude && latitude !== 1000.0 && longitude && longitude !== 1000.0) {
            if (urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("lat=", latitude, "&long=", longitude);
        }
    }
    return urlParams;
}

function buildGeolocationUrlParams() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var apiKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    var urlParams = "";

    if (apiKey) {
        urlParams = urlParams.concat("apiKey=", apiKey);
    }

    if (params) {
        var ip = params.getIP();

        if (ip) {
            if (urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("ip=", ip);
        }

        var fields = params.getFields();

        if (fields) {
            if (urlParams) {
                urlParams = urlParams.concat("&");
            }
            urlParams = urlParams.concat("fields=", fields);
        }
    }
    return urlParams;
}

function getRequest() {
    var subUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var callback = arguments[2];

    var jsonData = null;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();

    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            jsonData = JSON.parse(this.responseText);

            if (callback && (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
                callback(jsonData);
            }
        }
    };
    xhttp.open("GET", "https://api.ipgeolocation.io/".concat(subUrl, "?", params, ""), true);
    xhttp.send();
}

function postRequest() {
    var subUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var apiKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var callback = arguments[3];

    var jsonData = null;
    var data = JSON.stringify({
        "ips": params.getIPList()
    });
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();

    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            jsonData = JSON.parse(this.responseText);

            if (callback && (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
                callback(jsonData);
            }
        }
    };
    xhttp.open("POST", "https://api.ipgeolocation.io/".concat(subUrl, "?apiKey=", apiKey, ""), true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(data);
}