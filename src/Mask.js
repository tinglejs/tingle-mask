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
        var t = this;
        t.el.classList.add('visible');
        t.el.offsetWidth;
        t.setState({
            opacity: options.opacity || t.props.opacity,
            onClick: options.onClick || t.props.onClick,
            onHide:  options.onHide  || t.props.onHide
        });
        t.el.style.opacity = 1;
    }

    hide() {
        var t = this;
        t.el.style.opacity = 0;
        setTimeout(function () {
            t.el.classList.remove('visible');
            t.state.onHide.call(t);
        }, 200);
    }

    render() {
        var t = this;
        var cls = React.addons.classSet;

        cls = cls({
            tMask: true,
            [t.props.className]: !!t.props.className
        });

        return (
            <div ref="el" className={cls} style={{
                backgroundColor: 'rgba(0, 0, 0, '+ t.state.opacity +')',
                zIndex:  t.state.zIndex
            }} onClick={t.hide.bind(this)}>
            </div>
        );
    }
}

Mask.defaultProps = {
    className: '',
    zIndex: 1000,
    opacity: 0.5,
    visible: false,
    onClick: function () {},
    onHide: function () {}
}

var WRAPPER_ID = '__TingleGlobalMask__';
var doc = document;
var wrapper = doc.getElementById(WRAPPER_ID);
if (!wrapper) {
    wrapper = doc.createElement('div');
    wrapper.id = WRAPPER_ID;
    doc.body.appendChild(wrapper);
}

Mask.global = React.render(<Mask/>, wrapper);

module.exports = Mask;