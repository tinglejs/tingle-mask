/**
 * Mask Component Demo for tingle
 * @author fushan
 * @maintainer quanyun.mqy
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

  showMask1() {
    this.refs.m1.show();
  }

  showMask2() {
    this.refs.m2.show();
  }

  hideMaskLater() {
    setTimeout(() => {
      this.refs.m2.hide();
    }, 1000)
  }

  render() {
    let t = this;
    return (
      <div className="tP10">
        <h3 className="tF18 tMB6" onClick={this.showMask1.bind(this)}>打开一个点击自身可关闭的Mask</h3>
        <Mask ref="m1"/>
        <h3 className="tF18 tMB6" onClick={this.showMask2.bind(this)}>点击打开一个点击自身不可关闭的Mask, 根据业务逻辑(这个demo是1秒)触发关闭.</h3>
        <Mask ref="m2" closeable={false} opacity={0.1} onClick={this.hideMaskLater.bind(this)}/>
      </div>
    );
  }
}

module.exports = Demo;
