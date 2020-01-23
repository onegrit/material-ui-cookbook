import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: { margin: theme.spacing(2) }
}))
/**
 * 输入框input 电话号码和Email验证示例
 */

const MyTextField = ({ isInvalid, ...props }) => {
    const invalid = isInvalid(props.value)

    return (
        <TextField
            {...props}
            error={invalid}
            helperText={invalid || props.helperText}
        />
    )
}
export default function ValidationAndErrorDisplay() {
    const classes = useStyles();
    const [inputs, setInputs] = useState([
        {
            id: 'phone',
            label: 'Phone',
            placeholder: '999-999-9999',
            value: '',
            // error: false,
            helperText: 'Any valid phone number will do',
            // getHelperText: (error) => (
            //     error ? "Woops. Not a valid phone number" : "Any valid phone number will do"
            // ),
            isValid: (value) => (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
                value))
        },
        {
            id: 'email',
            label: 'Email',
            placeholder: 'john@acme.com',
            value: '',
            // error: false,
            helperText: 'Any valid email address will do',
            // getHelperText: error =>
                // error
                    // ? 'Woops. Not a valid email address'
                    // : 'Any valid email address will do',
            isValid: value => /\S+@\S+\.\S+/.test(value)
        }
    ])

    const onChange = ({ target: { id, value } }) => {
        const newInputs = [...inputs]
        const index = inputs.findIndex((input) => input.id === id)
        const input = inputs[index]
        const isvalid = input.isValid(value)
        newInputs[index] = {
            // ...input,
            ...inputs[index],
            value: value,
            // error: !isvalid,
            // helperText: input.getHelperText(!isvalid)

        }

        setInputs(newInputs)
    }

    return (
        <Grid container spacing={4} className={classes.container}>
            {
                inputs.map((input) =>
                    <Grid item key={input.id}>
                        <MyTextField
                            id={input.id}
                            label={input.label}
                            placeholder={input.placeholder}
                            helperText={input.helperText}
                            value={input.value}
                            onChange={onChange}
                            isValid={input.isValid}
                            error={input.error}
                        />
                    </Grid>
                )
            }
        </Grid>
    )
}