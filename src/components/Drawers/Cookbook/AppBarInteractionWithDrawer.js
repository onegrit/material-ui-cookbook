import React, { useState, Fragment } from 'react';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * aboveDrawer:为了解决抽屉覆盖AppBar的问题
 * @param {*} theme 
 */
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
        zIndex: theme.zIndex.drawer + 100
    }
});
/**
 * MyToolbar组件接收两个props:title和onMenuClick
 * With the help of the clsx() function, the toolbarMargin class is only added when needed – that is, 
 * when the drawer is persistent. Here's what it looks like now:
 */
const MyToolbar = withStyles(styles)(
    ({ classes, title, onMenuClick }) => (
        <Fragment>
            {/* aboveDrawer:为了解决抽屉覆盖AppBar的问题 */}
            <AppBar className={classes.aboveDrawer} >
                <Toolbar >
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </Fragment>
    )
);


const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, setTitle,onItemClick }) => (
        <Drawer variant="persistent" open={open} onClose={onClose}>
            <div className={clsx({ [classes.toolbarMargin]: variant === 'persistent' })} />
            <List>
                <ListItem
                    button
                    
                    onClick={onItemClick('Home')}
                >
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={onItemClick('Page 2')}
                >
                    <ListItemText>Page 2</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={onItemClick('Page 3')}
                >
                    <ListItemText>Page 3</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    )
);


function AppBarInteractionWithDrawer({ classes,variant }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');
    /**
     * 更改Drawer的状态
     */
    const toggleDrawer = () => {
        setDrawer(!drawer);
    };
    /**
     * onItemClick：fix the issue where the drawer closes when a drawer item
     *  is clicked on. In the main app component, 
     * @param {}} title 
     */
    const onItemClick = title => () => {
        setTitle(title)
        setDrawer(variant === 'temporay' ? false : drawer)
    }
    return (
        <div className={classes.root}>
            <MyToolbar title={title} onMenuClick={toggleDrawer} />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                onItemClick={onItemClick}
                variant={variant}
            />
        </div>
    );
}

export default withStyles(styles)(AppBarInteractionWithDrawer);
