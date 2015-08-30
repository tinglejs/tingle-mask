/**
 * Mask Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');
var Context = require('tingle-context');

class Mask extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.el = React.findDOMNode(this.refs.root);
    }

    show() {
        var t = this;
        t.el.style.display = 'block';
        t.el.classList.add('fadeIn');
    }

    hide() {
        var t = this;
        t.el.classList.remove('fadeIn');
        t.el.classList.add('fadeOut');
        setTimeout(function () {
            t.el.classList.remove('fadeOut');
            t.el.style.display = 'none';
        }, 200);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        var t = this;

        return <div ref="root" className={classnames('tMask', {
            [t.props.className]: !!t.props.className
        })} style={{
            backgroundColor: 'rgba(0, 0, 0, '+ t.props.opacity +')',
            zIndex:  t.props.zIndex
        }} onClick={t.handleClick.bind(t)}>
        </div>
    }
}

Mask.defaultProps = {
    onClick: Context.noop,
    opacity: 0.5,
    zIndex: 100
}

// http://facebook.github.io/react/docs/reusable-components.html
Mask.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    opacity: React.PropTypes.number,
    zIndex: React.PropTypes.number
}

module.exports = Mask;
