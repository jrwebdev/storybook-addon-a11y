'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    width: '100%'
  },
  tabs: {
    borderBottom: '1px solid rgb(234, 234, 234)',
    flexWrap: 'wrap',
    display: 'flex'
  },
  tab: {
    fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    color: 'rgb(68, 68, 68)',
    fontSize: '11px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '10px 15px',
    letterSpacing: '1px',
    cursor: 'pointer',
    fontWeight: 500,
    opacity: 0.7
  },
  tabActive: {
    opacity: 1,
    fontWeight: 600
  }
};

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      active: 0
    };

    _this.onToggle = _this.onToggle.bind(_this);
    _this.renderPanel = _this.renderPanel.bind(_this);
    _this.renderTabs = _this.renderTabs.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'onToggle',
    value: function onToggle(index) {
      this.setState({
        active: index
      });
    }
  }, {
    key: 'renderPanel',
    value: function renderPanel() {
      var tabs = this.props.tabs;
      var active = this.state.active;


      return _react2.default.createElement(
        'div',
        { style: styles.panel },
        tabs[active].panel
      );
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this2 = this;

      var tabs = this.props.tabs;
      var active = this.state.active;


      return _react2.default.createElement(
        'div',
        { style: styles.tabs },
        tabs.map(function (tab, index) {
          return _react2.default.createElement(
            'div',
            {
              key: index,
              style: _extends({}, styles.tab, index === active ? styles.tabActive : undefined),
              onClick: function onClick() {
                return _this2.onToggle(index);
              }
            },
            tab.label
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = this.props.tabs;


      return _react2.default.createElement(
        'div',
        { style: styles.container },
        this.renderTabs(),
        this.renderPanel()
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  tabs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.element,
    panel: _react.PropTypes.element
  }))
};
exports.default = Tabs;