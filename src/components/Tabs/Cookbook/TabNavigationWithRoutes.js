import React, { useState, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

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
        padding: theme.spacing(2)
    }
});

const TabContainer = ({ value }) => (
    <AppBar position="static">
        <Tabs value={value}>
            <Tab label="Item One" component={Link} to="/" />
            <Tab label="Item Two" component={Link} to="/page2" />
            <Tab label="Item Three" component={Link} to="/page3" />
        </Tabs>
    </AppBar>
);


function TabNavigationWithRoutes({ classes }) {
    const [value, setValue] = useState(0);
    // value是tab索引
    const onChange = (e, value) => {
        setValue(value);
    };
    return (
        <div className={classes.root}>
            {/*  用TabContainer实现
            <AppBar position="static">
                <Tabs value={value} onChange={onChange}>
                    <Tab label="Tab One" component={Link} to="/" />
                    <Tab label="Tab Two" component={Link} to="/page2" />
                    <Tab label="Tab Three" component={Link} to="/page3" />
                </Tabs>
            </AppBar>
            */}
            <Route
                exact
                path="/"
                render={() => (
                    <Fragment>
                        <TabContainer />
                        <Typography component="div" className={classes.tabContent}>
                            Item One
                        </Typography>
                    </Fragment>
                )}
            />
            <Route
                exact
                path="/page2"
                render={() => (
                    <Fragment>
                        <TabContainer />
                        <Typography component="div" className={classes.tabContent}>
                            Item 2
                        </Typography>
                    </Fragment>
                )}
            />
            <Route
                exact
                path="/page3"
                render={() => (
                    <Fragment>
                        <TabContainer />
                        <Typography component="div" className={classes.tabContent}>
                            Item 3
                        </Typography>
                    </Fragment>
                )}
            />
        </div>
    );
}

export default withStyles(styles)(TabNavigationWithRoutes);
