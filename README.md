## tingle-mask

用于`tingle`的抽象遮罩层组件`Mask`。

## Install

```js
npm install tingle-mask --save
```

## Usage

```js

var Mask = require('tingle-mask');
class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    showMask(mask) {
        this.refs.mask.show();
    }

    hideMask(mask) {
        this.refs.mask.hide();
    }

    render() {
        var t = this;
        return (
            <div className="tP10">
                <h3 onClick={t.showMask.bind(t)}>打开透mask</h3>
                <Mask ref="mask" onClick={t.hideMask.bind(t)}/>
            </div>
        );
    }
};
```

## Props

### className

String，自定义的class名称。

### onClick

Function，遮罩被点击时的事件，默认`noop`。

### opacity

Number，遮罩的透明度，范围`0~1`，默认`0.5`。

### zIndex

Number，遮罩的`z`轴层级，默认`100`。

## Links

## Updates

#### v0.1.0 (2015-08-31)

* 删除全局模式的`Mask`。
* 删除遮罩被点击时默认关闭的行为。



