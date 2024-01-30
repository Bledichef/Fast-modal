"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Modal = function Modal(_ref) {
  var contentModal = _ref.contentModal,
    hide = _ref.hide;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text"
  }, contentModal), /*#__PURE__*/_react["default"].createElement("span", {
    className: "close-modal",
    onClick: hide
  }, "X"))));
};
var _default = exports["default"] = Modal;