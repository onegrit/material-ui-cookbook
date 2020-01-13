import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import { Grid, Paper, Chip, Typography } from "@material-ui/core"

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
})


const FillingSpace = withStyles(styles)(({ classes, justify }) => (
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justify="center">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justify="space-around">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </Grid>
    </div>
))

export default FillingSpace