var Mask = require('../src');

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    // 以私有方式使用`mask`，要显示声明`Mask Component`, 
    // 参数通过`Component`的`props`实现
    showPrivateMask() {
        this.refs.m1.show();
    }

    // 以全局方式使用`mask`，不需要显示声明`Mask Component`, 
    // 参数通过`Mask.global.show(options)`实现
    showGlobalMask() {
        Mask.global.show({
            opacity: 0.2,
            onHide: function () {}
        });
    }

    render() {
        return (
            <div className="tP10">
                <h3 className="tF18 tMB6" onClick={this.showPrivateMask.bind(this)}>点击打开私有mask</h3>
                <Mask ref="m1" opacity={0.5} className="m1"/>
                <p className="tMB20 tF6">以私有方式使用`mask`，要显示声明`Mask Component`, 参数通过`Component`的`props`实现</p>
                <h3 className="tF18 tMB6" onClick={this.showGlobalMask.bind(this)}>点击打开全局mask</h3>
                <p className="tMB20 tF6">以全局方式使用`mask`，不需要显示声明`Mask Component`, 参数通过`Mask.global.show(options)`实现</p>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));