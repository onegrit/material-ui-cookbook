import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { MenuItem, Button, AppBar, Toolbar, IconButton, Menu, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
})

const MyMenuItems = (closeMenu) => (
    <Fragment>
        <MenuItem onClick={closeMenu}>MYPROFILE</MenuItem>
        <MenuItem onClick={closeMenu}>MYACCOUNT</MenuItem>
        <MenuItem onClick={closeMenu}>LOGOUT</MenuItem>
    </Fragment>
)
const MyToolbar = withStyles(styles)(
    class extends Component {
        // 设置默认属性，这些属性是可以通过父组件进行自定义的，如上所示
        static defaultProps = {
            title: 'My TOOLBAR',
            MenuItems: ({ closeMenu }) => (
                <Fragment>
                    <MenuItem onClick={closeMenu}>Profile</MenuItem>
                    <MenuItem onClick={closeMenu}>My Account</MenuItem>
                    <MenuItem onClick={closeMenu}>Logout</MenuItem>
                </Fragment>
            ),
            RightButton: () => (<Button color="inherit">Login</Button>)
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
                                onClick={e => this.setState({ anchor: e.currentTarget })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchor}
                                open={Boolean(this.state.anchor)}
                                onClose={this.closeMenu}
                            >
                                <MenuItems closeMenu={this.closeMenu} />
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

const ToolbarAbstraction = withStyles(styles)(
    ({ classes, ...props }) => (
        <div className={classes.root}>
            {/* 可通过属性定制Mytoolbar,如果不传递属性，则Mytoolbar有自己的默认值 */}
            <MyToolbar
                MenuItems={MyMenuItems}
                {...props}
                RightButton={() => (
                    <Button color="secondary" variant="contained" >LOGOUT</Button>
                )}
            />
        </div>
    )
)

export default ToolbarAbstraction