import React, { useState } from 'react';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/**
 * 功能要点：
    Tab在小屏幕时对齐方式是centered，在大屏幕时对齐方式是水平平均分布
 * @param {*} theme 
 */

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
});

function TabAlignmentWithCompose({ classes, width }) {
    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={onChange}
                variant={['xs', 'sm'].includes(width) ? null : 'fullWidth'}
                centered
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </div>
    );
}

export default compose(
    withWidth(),
    withStyles(styles)
)(TabAlignmentWithCompose);
