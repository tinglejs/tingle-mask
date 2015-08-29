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
        this.state = {
            visible: props.visible
        }
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
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        var t = this;

        return <div ref="root" className={classnames('tMask', {
            visible: t.state.visible,
            [t.props.className]: !!t.props.className
        })} style={{
            backgroundColor: 'rgba(0, 0, 0, '+ t.props.opacity +')',
            opacity: t.state.visible ? 1 : 0,
            zIndex:  t.props.zIndex
        }} onClick={t.handleClick.bind(t)}>
        </div>
    }
}

Mask.defaultProps = {
    onClick: Context.noop,
    opacity: 0.5,
    visible: false,
    zIndex: 100
}

// http://facebook.github.io/react/docs/reusable-components.html
Mask.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    opacity: React.PropTypes.number,
    visible: React.PropTypes.bool,
    zIndex: React.PropTypes.number
}

module.exports = Mask;
