"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.config = void 0;

var _nextConnect = _interopRequireDefault(require("next-connect"));

var _dbConnect = _interopRequireDefault(require("../../../config/dbConnect"));

var _authControllers = require("../../../controllers/authControllers");

var _auth = require("../../../middleware/auth");

var _error = _interopRequireDefault(require("../../../middleware/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handler = (0, _nextConnect["default"])({
  onError: _error["default"]
});
(0, _dbConnect["default"])();
var config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb"
    }
  }
};
exports.config = config;
handler.use(_auth.isAuthenticatedUser).put(_authControllers.updateProfile);
var _default = handler;
exports["default"] = _default;