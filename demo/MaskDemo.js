/**
 * Mask Component Demo for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');

var Mask = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    showMask(mask) {
        this.refs[mask].show();
    }

    hideMask(mask) {
        this.refs[mask].hide();
    }

    render() {
        var t = this;
        return (
            <div className="tP10">
                <h3 className="tF18 tMB6" onClick={t.showMask.bind(t, 'mask1')}>打开透明度0.5(默认)的mask</h3>
                <Mask ref="mask1" onClick={t.hideMask.bind(t, 'mask1')}/>

                <h3 className="tF18 tMB6" onClick={t.showMask.bind(t, 'mask2')}>打开透明度0.2的mask</h3>
                <Mask ref="mask2" opacity={0.2} onClick={t.hideMask.bind(t, 'mask2')}/>
            </div>
        );
    }
};

module.exports = Demo;
