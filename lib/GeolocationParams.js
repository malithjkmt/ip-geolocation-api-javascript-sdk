"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function GeolocationParams() {
        _classCallCheck(this, GeolocationParams);

        var ip = "";
        var fields = "";
        var ips = "";
    }

    _createClass(GeolocationParams, [{
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
        key: "setFields",
        value: function setFields() {
            var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            this.fields = fields;
        }
    }, {
        key: "getFields",
        value: function getFields() {
            return this.fields;
        }
    }, {
        key: "setIPList",
        value: function setIPList() {
            var ips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (ips.length > 50) {
                console.log("Max. number of IP addresses cannot be more than 50.");
            } else {
                this.ips = ips;
            }
        }
    }, {
        key: "getIPList",
        value: function getIPList() {
            return this.ips;
        }
    }]);

    return GeolocationParams;
}();