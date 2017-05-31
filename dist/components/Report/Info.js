'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  info: {
    backgroundColor: 'rgb(234, 234, 234)',
    padding: '12px',
    marginBottom: '10px'
  },
  help: {
    margin: '0 0 12px'
  },
  helpUrl: {
    marginTop: '12px',
    textDecoration: 'underline',
    color: 'rgb(130, 130, 130)',
    display: 'block'
  }
};

function Info(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    'div',
    { style: styles.info },
    _react2.default.createElement(
      'p',
      { style: styles.help },
      item.help
    ),
    _react2.default.createElement(
      'a',
      {
        style: styles.helpUrl,
        href: item.helpUrl,
        target: '_blank'
      },
      'More info...'
    )
  );
}

Info.propTypes = {
  item: _react.PropTypes.object
};

exports.default = Info;