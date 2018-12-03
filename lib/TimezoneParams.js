"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function TimezoneParams() {
        _classCallCheck(this, TimezoneParams);

        var timezone = "";
        var ip = "";
        var latitude = 1000.0;
        var longitude = 1000.0;
    }

    _createClass(TimezoneParams, [{
        key: "setTimezone",
        value: function setTimezone() {
            var timezone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            this.timezone = timezone;
        }
    }, {
        key: "getTimezone",
        value: function getTimezone() {
            return this.timezone;
        }
    }, {
        key: "setIP",
        value: function setIP() {
            var ip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            this.ip = ip;
        }
    }, {
        key: "getIP",
        value: function getIP() {
            return this.ip;
        }
    }, {
        key: "setLocation",
        value: function setLocation() {
            var latitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var longitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            this.latitude = latitude;
            this.longitude = longitude;
        }
    }, {
        key: "getLatitude",
        value: function getLatitude() {
            return this.latitude;
        }
    }, {
        key: "getLongitude",
        value: function getLongitude() {
            return this.longitude;
        }
    }]);

    return TimezoneParams;
}();