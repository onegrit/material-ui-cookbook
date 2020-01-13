import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))
/**
 * 参见官网：Fluid grids（流式格网）
 * 所谓fluid 布局，就是当只指定了xs属性后的固定数量的列布局，列的数量不会流动，也就列数不会增多或减少，
 * 而列的宽度和间距会缩放，以保持固定的列数
 */
export default function FluidGrids(){
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* 这是通栏布局 只有1列*/}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                {/* 下面是一行两列固定布局 */}
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                {/* 下面是1行4列固定布局 */}
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
