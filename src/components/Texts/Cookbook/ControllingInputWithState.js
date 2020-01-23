import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing.unit * 2
    }
}))

export default function ControllingInputWithState() {
    const classes = useStyles()
    // state对应着TextField 的value
    
   
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    
    //讲input保存到对象数组中
    /**
     * const [inputs, setInputs] = useState([
        { id: 'first', label: 'First', value: '' },
        { id: 'second', label: 'Second', value: "" },
        { id: 'third', label: 'Third', value: '' }
    ])
    //onChange更新数组中的一个元素对象
    const onChange = ({ target: { id, value } }) => {
        const newInputs = [...inputs]
        // 首先，查找需要更新的数组中的元素的索引
        const index = inputs.findIndex((input) => (input.id === id))
        // 
        newInputs[index] = {...inputs[index],value}
        setInputs(newInputs)
    }
    */
    return (
        <Grid container spacing={4} className={classes.container}>
            {/*  
            {
                inputs.map((input) => (
                    <Grid item key={input.id}>
                        <TextField
                            id={input.id}
                            value={input.value}
                            label={input.label}
                            onChange={onChange}
                        />
                    </Grid>
                ))
            }*/}
            {/*  */}
            <Grid item>
                <TextField
                    id="first"
                    label="First"
                    value={first}
                    placeholder="username"
                    onChange={(e) => (setFirst(e.target.value))}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="second"
                    label="Second"
                    value={second}
                    helperText="Please input user name"
                    onChange={(e) => (setSecond(e.target.value))}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="third"
                    label="Third"
                    value={third}
                    onChange={(e) => (setThird(e.target.value))}
                />
            
            </Grid>
            
        </Grid>
    )
}