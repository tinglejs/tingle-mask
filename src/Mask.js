/**
 * Mask Component for tingle
 * @author fushan
 * @maintainer quanyun.mqy
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const classnames = require('classnames');
const {noop} = require('tingle-context');

class Mask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  show() {
    this.setState({
      visible: true
    });
  }

  hide() {
    this.setState({
      visible: false
    });
    this.props.onHide();
  }

  handleClick() {
    let t = this;
    t.props.closeable && t.hide();
    t.props.onClick();
  }

  render() {
    let t = this;
    let {className, onClick, style, ...other} = t.props;

    return <div ref='root' className={classnames('tMask', {
      visible: t.state.visible,
      [className]: className
    })} style={{
      backgroundColor: 'rgba(0, 0, 0, ' + t.props.opacity + ')',
      opacity: t.state.visible ? 1 : 0,
      zIndex: t.props.zIndex
    }} onClick={t.handleClick.bind(this, false)} {...other}></div>;
  }
}

Mask.defaultProps = {
  closeable: true,
  opacity: 0.6,
  onClick: noop,
  onHide: noop,
  visible: false,
  zIndex: 1000
};

// http://facebook.github.io/react/docs/reusable-components.html
Mask.propTypes = {
  className: React.PropTypes.string,
  closeable: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  onHide: React.PropTypes.func,
  opacity: React.PropTypes.number,
  visible: React.PropTypes.bool,
  zIndex: React.PropTypes.number
};

Mask.displayName = 'Mask';

module.exports = Mask;
