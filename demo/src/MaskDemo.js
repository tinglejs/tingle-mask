/**
 * Mask Component Demo for tingle
 * @author quanyun.mqy
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */

const classnames = require('classnames');
const Context = require('tingle-context');

const Mask = require('../../src');

// build之后, 测试一下下面一行, 把上面一行注释掉
//const Mask = require('../../dist');

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
    console.log(this.refs.m1);
    console.log(ReactDOM.findDOMNode(this.refs.m1));
  }

  // 以全局方式使用`mask`，不需要显示声明`Mask Component`,
  // 参数通过`Mask.show(options)`实现
  showGlobalMask() {
    Mask.show({
      opacity: 0.6,
      // TODO
      // onClick: () =>{
      //     console.log('global mask click');
      // },
      onHide: ()=> {
        console.log('global mask hide');
      }
    });
  }

  render() {
    return (
      <div className="tP10">
        <h3 className="tF18 tMB6" onClick={this.showPrivateMask.bind(this)}>点击打开私有mask</h3>
        <Mask ref="m1" className="m1"/>
        <p className="tMB20 tF6">以私有方式使用`mask`，要显示声明`Mask Component`, 参数通过`Component`的`props`实现</p>
        <h3 className="tF18 tMB6" onClick={this.showGlobalMask.bind(this)}>点击打开全局mask</h3>
        <p className="tMB20 tF6">以全局方式使用`mask`，不需要显示声明`Mask Component`, 参数通过`Mask.show(options)`实现</p>
      </div>
    );
  }
}

module.exports = Demo;
