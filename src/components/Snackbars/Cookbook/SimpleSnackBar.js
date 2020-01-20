import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

const MySnackbarContent = () => (
    <Snackbar open={true} message="Test snackbar" ContentProps={{variant: 'h6'}}/>
)
    
export default MySnackbarContent