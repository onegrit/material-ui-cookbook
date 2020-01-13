import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Hidden } from '@material-ui/core'


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        textAlign: 'center'
    }
})

const ColumnDirection = withStyles(styles)(({ classes }) => (
    <div className={classes.root}>
        <Grid container justify="space-around" spacing={4}>
            {/* 由于只制定了xs属性，因此是固定列布局 */}
            <Grid item xs={3}>
                {/* 嵌套容器是纵向排列的 */}
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>1-1</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>2-1</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>1-2</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>2-2</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>1-3</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>2-3</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            {/* 当屏幕达到sm或小于small时，隐藏第四列 */}
            <Hidden smDown>
                <Grid item xs={3}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Typography>1-4</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Typography>2-4</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

        </Grid>
    </div>
))

export default ColumnDirection