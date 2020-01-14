import React, { useState } from 'react'
import { Route,Switch, Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';


/**
 * 需求要点：
    - 使用react-router-dome做路由
    - 使用Drawer做导航
    - 集成react-router-dom与Drawer
    - 高亮显示Active Link
 * @param {*} theme 
 */

const styles = (theme) => ({
    alignContent: {
        alignSelf: 'center'
    },
    activeListItem: {
        color: theme.palette.primary.main
    }
})
/**
 * The NavListItem component is now responsible for rendering the ListItem components 
 * in the Drawer component. It takes a text property and an Icon property to render the label 
 * and the icon respectively, just like before your enhancements. The active property is used to 
 * determine the class that gets applied to the ListItemIcon and ListItemText components. 
 * The activeListItem CSS class is applied to both of these components if active is true. 
 * This is how you're able to style the active item based on the Material-UI theme.


 */
const NavListItem = withStyles(styles)(({ classes, Icon, text, active, ...other }) => (
    <ListItem component={NavLink} {...other}>
        <ListItemIcon
            classes={{
                root: clsx({ [classes.activeListItem]: active })
            }}
        >
            <Icon />
        </ListItemIcon>
        <ListItemText
            classes={{
                primary: clsx({ [classes.activeListItem]: active })
            }}
        >
            {text}
        </ListItemText>
    </ListItem>
))
/**
 * NavItem:
 * This component is used to determine whether or not the item is active, based on the current URL.
 * It uses the Switch component from react-router-dom. Instead of just rendering Route components,
 *  Switch will only render the first route whose path matches the current URL. 
 * The first Route component in NavItem is the specific path (as it uses the exact property). 
 * If this Route component matches, it renders a NavListItem component with the active property 
 * set to true. Because it's in a Switch component, the second Route component will not be 
 * rendered.


 * 
 */
const NavItem = (props) => (
    <Switch>
        <Route exact path={props.to}
            render={() => <NavListItem active={true} {...props} />}
        />
        <Route path="/"
            render={() => <NavListItem  {...props} />}
        />
    </Switch>
)

function DrawerItemNavigation({ classes }) {
    const [open, setOpen] = useState(false)

    return (
        <Grid container justify="space-between">
            <Grid item className={classes.alignContent}>
                <Route
                    exact
                    path="/"
                    render={() => (<Typography>Home</Typography>)}
                />
                <Route
                    exact
                    path="/page2"
                    render={() => (<Typography>页面2</Typography>)}
                />
                <Route
                    exact
                    path="/page3"
                    render={() => (<Typography>页面3</Typography>)}
                />
            </Grid>
            <Grid item>
                <Drawer
                    className={classes.drawerWidth}
                    open={open}
                    onClose={() => (setOpen(false))}
                >
                    <List>
                        <NavItem
                            to="/"
                            text="Home"
                            Icon={HomeIcon}
                            onClick={() => (setOpen(false))}
                        />
                        <NavItem
                            to="/page2"
                            text="Page II"
                            Icon={WebIcon}
                            onClick={() => (setOpen(false))}
                        />
                        <NavItem
                            to="/page3"
                            text="Page III"
                            Icon={WebIcon}
                            onClick={() => (setOpen(false))}
                        />
                        
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => (setOpen(!open))}>
                    {open ? "Hide" : "Show"} Drawer
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(DrawerItemNavigation)