'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axeCore = require('axe-core');

var _axeCore2 = _interopRequireDefault(_axeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapStory = function (_Component) {
  _inherits(WrapStory, _Component);

  function WrapStory() {
    _classCallCheck(this, WrapStory);

    return _possibleConstructorReturn(this, (WrapStory.__proto__ || Object.getPrototypeOf(WrapStory)).apply(this, arguments));
  }

  _createClass(WrapStory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var channel = this.props.channel;


      _axeCore2.default.a11yCheck(this.wrapper, {}, function (results) {
        channel.emit('addon:a11y:check', results);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          storyFn = _props.storyFn,
          context = _props.context;


      return _react2.default.createElement(
        'span',
        {
          ref: function ref(container) {
            _this2.wrapper = container;
          }
        },
        storyFn(context)
      );
    }
  }]);

  return WrapStory;
}(_react.Component);

WrapStory.propTypes = {
  context: _react.PropTypes.object,
  storyFn: _react.PropTypes.func,
  channel: _react.PropTypes.object
};
exports.default = WrapStory;