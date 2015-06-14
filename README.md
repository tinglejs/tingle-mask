# tingle-mask
The `Mask Component` for tingle

## 声明模块

```js
var Mask = require('tingle-mask');
```

## 全局方式使用

#### `Mask.show(options)`

打开全局共用的遮罩实例。

```js
Mask.show({
   // 遮罩层的透明度，有效范围0~1
	opacity: 0.5,
	// 遮罩层被点击时的回调
	onClick: function () {},
	// 遮罩层关闭以后的回调
	onHide: function () {}
});
```

#### `Mask.hide()`

关闭全局共用的遮罩实例。

```js
Mask.hide();
```

## `Compontent`方式使用

```js
...
handleMaskClick() {}

handleMaskHide() {}

render() {
    return (
        <Mask opacity={0.5} 
         onClick={this.handleMaskClick.bind(this)}
         onHide={this.handleMaskHide.bind(this)}/>
    )
}
```





