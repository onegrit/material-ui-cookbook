import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Fade, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
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
})

const ScrolledAppBar = withStyles(styles)(
    class extends Component {
        // The scrolling state is a Boolean value that hides the AppBar component when true.
        //The scrollTop state is the position of the previous scroll event.
        state = {
            scrolling: false,
            scrollTop: 0,
        }
        /**
         * The onScroll() method figures out whether the user is scrolling 
         * by checking if the new scroll position is greater than the last scroll position.
         */
        onScroll = e => {
            this.setState(state => ({
                scrollTop: e.target.documentElement.scrollTop,
                scrolling: e.target.documentElement.scrollTop > state.scrollTop
            }))
        }
        shouldComponentUpdate(props,state){
            return this.state.scrolling !== state.scrolling
        }
        componentDidMount(){
            window.addEventListener('scroll',this.onScroll)
        }
        componentWillUnmount(){
            window.removeEventListener('scroll',this.onScroll)
        }
        render() {
            const { classes } = this.props;
            return (
                /**
                 * The Fade component that's used to hide the AppBar component when scrolling,
                 * The in property tells the Fade component to fade its children, in, 
                 * when the value is true. In this example, the condition is true when the scrolling 
                 * state is false.
                 *  */ 
                <Fade in={!this.state.scrolling}>
                    <AppBar>
                        <Toolbar>
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aira-label="Menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={classes.flex}
                            >
                                My Title
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Fade>
            )
        }
    }
)

const HideAppBarOnScrollWindow = withStyles(styles)(({ classes, title, buttonText }) => (
    <div className={classes.root}>
        <ScrolledAppBar />
        <div className={classes.toolbarMargin} />
        <ul>
            {
                new Array(500).fill(null).map((v, i) => (
                    <li key={i}>{i}</li>
                ))
            }
        </ul>
    </div>
))

export default HideAppBarOnScrollWindow