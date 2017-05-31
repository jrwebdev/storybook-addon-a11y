'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Info = require('./Info');

var _Info2 = _interopRequireDefault(_Info);

var _Tags = require('./Tags');

var _Tags2 = _interopRequireDefault(_Tags);

var _Elements = require('./Elements');

var _Elements2 = _interopRequireDefault(_Elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  item: {
    padding: '0 14px',
    cursor: 'pointer',
    borderBottom: '1px solid rgb(234, 234, 234)'
  },
  headerBar: {
    margin: '12px 0',
    display: 'block',
    width: '100%'
  }
};

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.onToggle = function () {
      return _this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          item = _props.item,
          passes = _props.passes;
      var open = this.state.open;


      return _react2.default.createElement(
        'div',
        { style: styles.item },
        _react2.default.createElement(
          'div',
          {
            style: styles.headerBar,
            onClick: function onClick() {
              return _this2.onToggle();
            }
          },
          item.description
        ),
        open && _react2.default.createElement(_Info2.default, { item: item }),
        open && _react2.default.createElement(_Elements2.default, {
          elements: item.nodes,
          passes: passes
        }),
        open && _react2.default.createElement(_Tags2.default, { tags: item.tags })
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  item: _react.PropTypes.object,
  passes: _react.PropTypes.bool
};
exports.default = Item;