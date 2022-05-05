"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = require("@testing-library/react");

var _SimpleReactModalMax = _interopRequireDefault(require("../SimpleReactModalMax"));

test('renders learn react link', function () {
  (0, _react.render)( /*#__PURE__*/React.createElement(_SimpleReactModalMax.default, null));

  var linkElement = _react.screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});