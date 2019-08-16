"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _mysql = _interopRequireDefault(require("mysql2"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _task = _interopRequireDefault(require("../app/controller/task"));

var _feedback = _interopRequireDefault(require("../app/controller/feedback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../client/build')));
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
var port = process.env.PORT || 2000;
app.get('/api/task', _task["default"].index);
app.get('/api/task/show', _task["default"].show);
app.post('/api/feedback', _feedback["default"].create);
app.get('/*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../client/build/index.html'));
});
app.listen(port, function () {
  console.log("Server Starts on http://localhost:".concat(port));
});