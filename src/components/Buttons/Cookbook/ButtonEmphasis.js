import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    container: {
        margin: theme.spacing(1)
    }
})

const ButtonEmphasis = withStyles(styles)(({classes,disabled}) => (
    <Grid
        container
        direction="column"
        spacing={16}
        className={classes.container}
    >
        <Grid item>
            <Typography variant="h6">Default</Typography>
        </Grid>
        <Grid item>
            <Grid container spacing={16}>
                <Grid item>
                    <Button variant="text" disabled={disabled}>Text Btn</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" disabled={disabled}>Outlined Btn</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" disabled={disabled}>Contained</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography variant="h6">Primary</Typography>
        </Grid>
        <Grid item>
            <Grid container spacing={16}>
                <Grid item>
                    <Button variant="text" color="primary" disabled={disabled}>Text Btn</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary"  disabled={disabled}>Outlined Btn</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary"  disabled={disabled}>Contained</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography variant="h6">Secondary</Typography>
        </Grid>
        <Grid item>
            <Grid container spacing={16}>
                <Grid item>
                    <Button variant="text" color="secondary" disabled={disabled}>Text Btn</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary"  disabled={disabled}>Outlined Btn</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary"  disabled={disabled}>Contained</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
))

export default ButtonEmphasis