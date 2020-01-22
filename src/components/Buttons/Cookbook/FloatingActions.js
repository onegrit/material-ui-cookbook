import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
    fab: {
        margin: 0,
        top: 'auto',
        left: 'auto',
        bottom: 20,
        right: 20,
        position: 'fixed'
    }
})

const FloatingActions = withStyles(styles)(({classes,fabColor}) => (
    <Fragment>
        <Fab className={classes.fab} color={fabColor}>
            <AddIcon />
        </Fab>
    </Fragment>
))

export default FloatingActions