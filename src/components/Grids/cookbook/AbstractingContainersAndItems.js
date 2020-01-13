import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core'


const styles = theme =>({
    root:{
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
})

const Container = (props) => (
    <Grid container {...props} />
)
const Item = (props) => (
    <Grid item xs={12} sm={6} md={3} {...props} />
)

const AbstractingContainersAndItems = withStyles(styles)(({classes}) => (
    <div className={classes.root}>
        <Container spacing={2}>
            <Item>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Item>
            <Item>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Item>
            <Item>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Item>
            <Item>
                <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
            </Item>
        </Container>
    </div>
))

export default AbstractingContainersAndItems