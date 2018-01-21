'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _splitObject3 = require('./util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyLoadImg = function (_React$Component) {
    (0, _inherits3.default)(LazyLoadImg, _React$Component);

    function LazyLoadImg() {
        (0, _classCallCheck3.default)(this, LazyLoadImg);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

        _this.state = {
            visible: false,
            viewport: {
                top: window.pageYOffset,
                height: window.innerHeight
            }
        };
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }

    LazyLoadImg.prototype.componentDidMount = function componentDidMount() {
        document.addEventListener('scroll', this.handleScroll, false);
        document.addEventListener('resize', this.handleScroll, false);
        this.checkVisible();
    };

    LazyLoadImg.prototype.componentWillUnmount = function componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('resize', this.handleScroll);
    };

    LazyLoadImg.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (!this.state.visible && prevState.viewport) {
            this.checkVisible();
        }
    };

    LazyLoadImg.prototype.checkVisible = function checkVisible() {
        var ele = ReactDOM.findDOMNode(this.refs['img']);
        var top = ele['y'];
        var height = ele.offsetHeight;
        var min = this.state.viewport.top;
        var max = this.state.viewport.top + this.state.viewport.height;
        var offset = height * 0.2;
        if ((min + this.props.offset.min || 0) <= top + height - offset && top <= (max + this.props.offset.max || 0 - offset)) {
            this.setState({
                viewport: this.state.viewport,
                visible: true
            });
        }
    };

    LazyLoadImg.prototype.handleScroll = function handleScroll(e) {
        this.setState({
            visible: this.state.visible,
            viewport: {
                top: window.pageYOffset,
                height: window.innerHeight
            }
        });
    };

    LazyLoadImg.prototype.render = function render() {
        if (!this.props.src) {
            console.error('LazyLoadImg props "src" is required');
        }
        if (!this.props.placeholder) {
            console.error('LazyLoadImg props "placeholder" is required');
        }
        var src = this.state.visible ? this.props.src : this.props.placeholder;

        var _splitObject = (0, _splitObject4.default)(this.props, ['src', 'placeholder']);

        var _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2);

        var rest = _splitObject2[0];
        var imgProps = _splitObject2[1];

        return React.createElement('img', (0, _extends3.default)({ ref: 'img', src: src }, imgProps));
    };

    return LazyLoadImg;
}(React.Component);

exports.default = LazyLoadImg;

LazyLoadImg.defaultProps = {
    placeholder: '',
    offset: {
        min: 0,
        max: 0
    }
};
module.exports = exports['default'];