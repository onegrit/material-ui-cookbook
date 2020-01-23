import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: { margin: theme.spacing(2) }
}));

/**
 * 输入装饰
 * 密码明文和密文装饰
 * email验证装饰
 */
function PasswordField() {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <TextField
            type={visible ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={toggleVisibility}>
                            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

const ValidationField = (props) => {
    const { isValid, ...rest } = props
    const empty = props.value === ''
    const valid = isValid(props.value)
    let startAdornment

    if (empty) {
        startAdornment = null;
    } else if (valid) {
        startAdornment = (
            <InputAdornment position="start">
                <CheckCircleIcon color="primary" />
            </InputAdornment>
        );
    } else {
        startAdornment = (
            <InputAdornment position="start">
                <ErrorIcon color="error" />
            </InputAdornment>
        );
    }

    return (
        <TextField
            {...rest}
            error={!empty && !valid}
            InputProps={{ startAdornment }}
        />
    );
}

export default function InputAdornments() {
    const classes = useStyles()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Grid container spacing={4} className={classes.container}>
            <Grid item>
                <PasswordField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Grid>
            <Grid item>
                <ValidationField
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isValid={v => /\S+@\S+\.\S+/.test(v)}
                />
            </Grid>
        </Grid>


    )
}