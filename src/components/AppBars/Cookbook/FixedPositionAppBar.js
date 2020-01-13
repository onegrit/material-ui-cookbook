import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// 注意：样式toolbarMargin:theme.mixins.toolbar的目的是为了使AppBar不遮挡conteng顶部内容；如不添加，Appbar会
//遮挡content中的顶部内容
const styles = (theme) => ({
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
    toolbarMargin: theme.mixins.toolbar
})

const FixedPositionAppBar = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color='inherit'
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.flex}
                >
                    Title
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        {/* 
            为了防止Appbar遮挡正文内容，添加如下div;
            Now, the beginning of the content is no longer hidden by the AppBar component 
            when the screen first loads:
        */}
        <div className={classes.toolbarMargin} />
        <ul>
            {
                new Array(500).fill(null).map((value, index) => (
                    <li key={index}>{index}</li>
                ))
            }
        </ul>
    </div>
))

export default FixedPositionAppBar