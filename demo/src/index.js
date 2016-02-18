/**
 * Mask Component Demo for tingle
 * @author quanyun.mqy
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./MaskDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
