import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function ControllingVisibilityWithState(){
    const [open, setOpen] = useState(false)
    
    const showSnackbar = () => (
        setOpen(true)
    )
    const closeSnackbar = () => (
        setOpen(false)
    )
    return(
        <Fragment>
            <Button variant="contained" onClick={showSnackbar}>
                Show Snackbar
            </Button>
            <Snackbar
                open={open}
                onClose={closeSnackbar}
                autoHideDuration ={5000}
                message="Visible snackbar..."
            />
        </Fragment>
    )
}