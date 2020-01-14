import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import { Link, Switch, Route } from 'react-router-dom'
import { Button, AppBar, Toolbar, IconButton, Menu, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
})
/**
 * 自定义Toolbar
 */
const MyToolBar = withStyles(styles)(
    class extends Component {
        static defaultProps = {
            MenuItems: () => (
                <Fragment>
                    <MenuItem component={Link} to="/">Home</MenuItem>
                    <MenuItem component={Link} to="/page2">Page 2</MenuItem>
                    <MenuItem component={Link} to="/page3">Page 3</MenuItem>
                    <MenuItem component={Link} to="/page4">Page 4</MenuItem>
                </Fragment>
            ),
            RightButton: () => <Button color="inherit">Login</Button>
        }
        state = { anchor: null }
        closeMenu = () => (this.setState({ anchor: null }))

        render() {
            const { classes, title, MenuItems, RightButton } = this.props
            return (
                <Fragment>
                    <AppBar>
                        <Toolbar>
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                                onClick={(e) => (this.setState({ anchor: e.currentTarget }))}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchor}
                                open={Boolean(this.state.anchor)}
                                onClose={this.closeMenu}
                            >
                                <MenuItems />
                            </Menu>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={classes.flex}
                            >
                                {title}
                            </Typography>
                            <RightButton />
                        </Toolbar>
                    </AppBar>
                    <div className={classes.toolbarMargin} />
                </Fragment>
            )
        }

    }
)
/**
 * 封装自定义的Toolbar
 * @param {*} title 
 * @param {*} content 
 */
const screen = (title, content) => () => (
    <Fragment>
        <MyToolBar title={title} />
        <Typography>{content}</Typography>
    </Fragment>
)

const AppBarWithNav = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
        {/* render属性调用了封装的函数 */}
        <Route
            exact
            path="/"
            render={screen('Home','Home Content')}
        />
        <Route
            exact
            path="/page2"
            render={() => (
                <Fragment>
                    <MyToolBar title="Page 2" />
                    <Typography>PAGE II</Typography>
                </Fragment>
            )}
        />
        <Route
            exact
            path="/page3"
            render={() => (
                <Fragment>
                    <MyToolBar title="Page 3" />
                    <Typography>PAGE III</Typography>
                </Fragment>
            )}
        />
        <Route
            exact
            path="/page4"
            render={() => (
                <Fragment>
                    <MyToolBar title="Page 4" />
                    <Typography>PAGE IV</Typography>
                </Fragment>
            )}
        />
    </div>
))

export default AppBarWithNav