/**
 * Mask Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let Context = require('tingle-context');
let classnames = require('classnames');

class Mask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: props.opacity,
            zIndex: props.zIndex,
            onHide: props.onHide
        }
    }

    componentDidMount() {
        this.el = this.refs.el.getDOMNode();
    }

    /*
     options.onHide
     options.onClick
     options.opacity
     */
    show(options) {
        options = options || {};
        let t = this;
        t.el.classList.add('visible');
        t.el.offsetWidth;
        t.setState({
            opacity: options.opacity || t.props.opacity,
            onClick: options.onClick || t.props.onClick,
            onHide: options.onHide || t.props.onHide
        });
        t.el.style.opacity = 1;
    }

    hide(force) {
        let t = this;
        if (force || this.props.closeable) {
            t.el.style.opacity = 0;
            setTimeout(()=> {
                t.el.classList.remove('visible');
                t.state.onHide.call(t);
            }, 200);
        }
    }

    render() {
        let t = this;

        let cls = classnames({
            tMask: true,
            [t.props.className]: !!t.props.className
        });

        return (
            <div ref="el" className={cls} style={{
                backgroundColor: 'rgba(0, 0, 0, ' + t.state.opacity + ')',
                zIndex: t.state.zIndex
            }} onClick={t.hide.bind(this, false)}>
            </div>
        );
    }
}

Mask.defaultProps = {
    className: '',
    zIndex: 1000,
    opacity: 0.5,
    visible: false,
    onClick: Context.noop,
    onHide: Context.noop,
    closeable: true
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
        Mask.global = React.render(<Mask/>, wrapper);
    }
    Mask.global.show(options);
};


Mask.hide = () => {
    Mask.global.hide(true);
};

Mask.displayName = "mask";

module.exports = Mask;