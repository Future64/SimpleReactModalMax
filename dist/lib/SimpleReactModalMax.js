"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./SimpleReactModalMax.css");

var SimpleReactModalMax = function SimpleReactModalMax(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeModal = _useState2[0],
      setActiveModal = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      viewCloseBtn = _useState4[0],
      setViewCloseBtn = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      responsiveModal = _useState6[0],
      setResponsiveModal = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      bgColorModal = _useState8[0],
      setBgColorModal = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      txtColorModal = _useState10[0],
      setTxtColor = _useState10[1];

  var _useState11 = (0, _react.useState)(""),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      pageOpacityModal = _useState12[0],
      setPageOpacityModal = _useState12[1];

  var _useState13 = (0, _react.useState)(""),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      close = _useState14[0],
      setClose = _useState14[1];

  var _useState15 = (0, _react.useState)(""),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      content = _useState16[0],
      setContent = _useState16[1];

  var _useState17 = (0, _react.useState)(""),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      msgBox = _useState18[0],
      setMsgBox = _useState18[1];
  /* Setting the options for the modal. */


  var options = {
    isOpen: props.isOpen,
    onClose: props.onClose,
    responsive: props.responsive,
    openAnim: props.openAnim,
    closeAnim: props.closeAnim,
    content: props.children,
    txtColor: props.txtColor,
    pageOpacity: props.pageOpacity
  };
  /**
   * If the modal is open, set the message box to the message box class, set the active modal to the
   * active modal class, and set the close button to the close button class
   */

  function handleIsOpen() {
    if (options.isOpen === true && options.openAnim == undefined || options.openAnim == false) {
      setMsgBox("messageBox");
      setActiveModal("activeModal");
      setClose("");
    } else if (options.isOpen === true && options.openAnim === true) {
      setMsgBox("messageBoxAnim");
      setActiveModal("activeModalAnim");
      setClose("");
    } else if (options.isOpen === true && options.openAnim === true && options.closeAnim === true) {
      setMsgBox("messageBoxAnim");
      setActiveModal("activeModalAnimfull");
      setClose("");
    } else {
      setActiveModal("");
      setClose("close");
    }
  }
  /**
   * It sets the viewCloseBtn class to the appropriate class based on the options.onClose value
   */


  function handleOnClose() {
    if (options.onClose === "rightTop") {
      setViewCloseBtn("viewCloseBtnRightTop");
    } else if (options.onClose === "leftTop") {
      setViewCloseBtn("viewCloseBtnLeftTop");
    } else if (options.onClose === "leftBottom") {
      setViewCloseBtn("viewCloseBtnLeftBottom");
    } else if (options.onClose === "rightBottom") {
      setViewCloseBtn("viewCloseBtnRightBottom");
    } else {
      setViewCloseBtn("viewCloseBtnRightTop");
    }
  }
  /**
   * If the user has set the responsive option to true, then set the modal to be responsive
   */


  function handleResponsive() {
    if (options.responsive === true) {
      setResponsiveModal("responsiveModal");
    } else {
      setResponsiveModal("notResponsive");
    }
  }
  /**
   * If the user has selected the option to change the background color, then set the background color of
   * the modal to the color the user has selected
   */


  function handleBgColor() {
    if (options.bgColor === true) {
      setBgColorModal("bgColorModal");
    } else {
      setBgColorModal("");
    }
  }
  /**
   * The function `handleTxtColor()` is called when the user changes the text color. The function checks
   * the value of the `options.txtColor` property and sets the text color accordingly
   */


  function handleTxtColor() {
    if (options.txtColor === "black") {
      setTxtColor("black");
    } else if (options.txtColor === "green") {
      setTxtColor("green");
    } else if (options.txtColor === "red") {
      setTxtColor("red");
    } else if (options.txtColor === "orange") {
      setTxtColor("orange");
    } else if (options.txtColor === "violet") {
      setTxtColor("violet");
    } else if (options.txtColor === "blue") {
      setTxtColor("blue");
    } else if (options.txtColor === "yellow") {
      setTxtColor("yellow");
    } else {
      setTxtColor("black");
    }
  }
  /**
   * If the pageOpacity option is set to "soft", "standard", "very", or "full", then set the page opacity
   * to the corresponding value. Otherwise, set the page opacity to "none".
   */


  function handlePageOpacity() {
    if (options.pageOpacity === "soft") {
      setPageOpacityModal("soft");
    } else if (options.pageOpacity === "standard") {
      setPageOpacityModal("standard");
    } else if (options.pageOpacity === "very") {
      setPageOpacityModal("very");
    } else if (options.pageOpacity === "full") {
      setPageOpacityModal("full");
    } else {
      setPageOpacityModal("none");
    }
  }
  /**
   * If the close button is clicked, and the closeAnim option is undefined or false, then the modal is
   * closed. If the closeAnim option is true, then the modal is closed with an animation. If the
   * closeAnim option is anything else, then the modal is closed without an animation
   */


  function handleCloseModal() {
    if (close === "close" && options.closeAnim === undefined || options.closeAnim === false) {
      setClose("activeModal");
      setActiveModal("activeModal");
    } else if (options.closeAnim === true) {
      setActiveModal("activeModalAnimfull");
    } else {
      setActiveModal("");
      setClose("close");
    }
  }

  (0, _react.useEffect)(function () {
    handleIsOpen();
    handleOnClose();
    handleResponsive();
    handleBgColor();
    handleTxtColor();
    handlePageOpacity();
    setContent(options.content);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(close, " ").concat(activeModal, " ").concat(pageOpacityModal)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "messageBox ".concat(close, " ").concat(bgColorModal, " ").concat(responsiveModal, " ").concat(msgBox)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "closeModal ".concat(close, " ").concat(viewCloseBtn),
    onClick: function onClick(e) {
      return handleCloseModal();
    }
  }, "x"), /*#__PURE__*/_react.default.createElement("div", {
    className: "createdMsgBox ".concat(close)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "createdMsg ".concat(close, " ").concat(txtColorModal)
  }, content))));
};

var _default = SimpleReactModalMax;
exports.default = _default;