import React, { Fragment, Children, useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
/**
 * 抽象Tab组件：TabContainer和TabContent
 * @param {}} theme 
 */
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing(2)
    }
});
function TabContainer({ children, value: valueProp }) {
    const [value, setValue] = useState(0);

    const onChange = (e, value) => {
        setValue(value);
    };
    if (value === undefined) {
        setValue(valueProp)
    }
    return (
        <Fragment>
            <Tabs value={value} onChange={onChange}>
                {Children.map(children, child => (
                    // 注意：这个label使用的是TabContent的属性label
                    <Tab label={child.props.label} />
                ))}
            </Tabs>
            {Children.map(children, (child, index) =>
                index === value ? child : null
            )}
        </Fragment>
    );
}
// 属性value控制默认显示那个Tab
TabContainer.defaultProps = {
    value: 0
}

const TabContent = withStyles(styles)(({ classes, children }) => (
    <Typography component="div" className={classes.tabContent}>
        {children}
    </Typography>
));

const AbstractingTabContent = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
        {/* 属性value控制默认显示那个Tab */}
        <TabContainer value={2}>
            {/* 注意下面的labe属性并没有被TabContent使用，而是被父组件TabContainer所使用：child.props.label */}
            <TabContent label="Tab One">Item One Content</TabContent>
            <TabContent label="Tab Two">Item Two Content</TabContent>
            <TabContent label="Tab Three">Item Three Content</TabContent>
        </TabContainer>
    </div>
));

export default AbstractingTabContent;
