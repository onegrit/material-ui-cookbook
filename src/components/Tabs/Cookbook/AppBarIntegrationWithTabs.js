import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing.unit * 2
    }
});


function AppBarIntegrationWithTabs({ classes }) {
    //value state is used to keep track of the selected tab.
    const [value, setValue] = useState(0);
    //The onChange() handler is used to update this state;it gets set to the current index of the selected tab
    const onChange = (e, value) => {
        setValue(value);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={onChange} variant="fullWidth">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
            {value === 0 && (
                <Typography component="div" className={classes.tabContent}>
                    Item One
                </Typography>
            )}
            {value === 1 && (
                <Typography component="div" className={classes.tabContent}>
                    Item Two
                </Typography>
            )}
            {value === 2 && (
                <Typography component="div" className={classes.tabContent}>
                    Item Three
                </Typography>
            )}
        </div>
    );
}

export default withStyles(styles)(AppBarIntegrationWithTabs);