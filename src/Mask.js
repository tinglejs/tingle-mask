/**
 * Mask Component for tingle
 * @author quanyun.mqy
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const classnames = require('classnames');
const Context = require('tingle-context');

class Mask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: props.opacity,
      zIndex: props.zIndex,
      onHide: props.onHide,
      closeable: props.closeable,
      visible: props.visible
    }
  }

  /*
   options.onHide
   options.onClick
   options.opacity
   */
  show(options) {
    let t = this;

    options = options || {};

    t.setState({
      opacity: 'opacity' in options ? options.opacity : t.props.opacity,
      zIndex: options.zIndex || t.props.zIndex,
      onHide: options.onHide || t.props.onHide,
      closeable: 'closeable' in options ? options.closeable : t.props.closeable,
      visible: true
    });

  }

  hide(force) {
    let t = this;
    if (force || t.state.closeable) {
      t.state.visible = false;
      t.setState(t.state);
      t.state.onHide.call(t);
    }

  }

  render() {
    let t = this;
    let cls = classnames({
      tMask: true,
      visible: t.state.visible,
      [t.props.className]: !!t.props.className
    });

    return (
      <div ref="root" className={cls} style={{
                backgroundColor: 'rgba(19, 21, 26, ' + t.state.opacity + ')',
                opacity: t.state.visible ? 1 : 0,
                zIndex: t.state.zIndex
            }} onClick={t.hide.bind(this, false)}>
      </div>
    );
  }
}

Mask.defaultProps = {
  className: '',
  zIndex: 1000,
  opacity: 0.6,
  visible: false,
  onHide: Context.noop,
  closeable: true
};

// http://facebook.github.io/react/docs/reusable-components.html
Mask.propTypes = {
  className: React.PropTypes.string
};

let WRAPPER_ID = '__TingleGlobalMask__';
let doc = document;
let wrapper = doc.getElementById(WRAPPER_ID);
if (!wrapper) {
  wrapper = doc.createElement('div');
  wrapper.id = WRAPPER_ID;
  doc.body.appendChild(wrapper);
}


Mask.global = null;
Mask.show = (options) => {
  // 只有首次全局调用时，才会创建全局实例
  if (!Mask.global) {
    let wrapper = doc.getElementById(WRAPPER_ID);
    if (!wrapper) {
      wrapper = doc.createElement('div');
      wrapper.id = WRAPPER_ID;
      doc.body.appendChild(wrapper);
    }
    Mask.global = ReactDOM.render(<Mask closeable={false} />, wrapper);
  }
  Mask.global.show(options);
};

Mask.hide = () => {
  Mask.global && Mask.global.hide(true);
};

Mask.displayName = 'Mask';

module.exports = Mask;
