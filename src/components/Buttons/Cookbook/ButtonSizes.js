import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

/**
 * 抽象Button的目的：
 * 使用带有按钮的T恤尺寸的缺点是，当您将文本和图标图像组合在一起时。 
 * 图标的缩放比例与文本的缩放比例不同，因此除非使用中等默认大小，否则按钮永远看起来都不正确。
 * @param {*} param0 
 */

const MyButton = ({ fab, ...props }) => {
    const [child] = React.Children.toArray(props.children)
    let ButtonComponent;

    if (React.isValidElement(child) && fab) {
        ButtonComponent = Fab;
    } else if (React.isValidElement(child)) {
        ButtonComponent = IconButton
    } else {
        ButtonComponent = Button
    }

    return <ButtonComponent {...props} />
}


export default function ButtonSizes({ size, color }) {
    return (
        <Grid container spacing={16} alignItems="center">
            <Grid item>
                <MyButton variant="contained" size={size} color={color}>
                    Add
                </MyButton>
            </Grid>
            <Grid item>
                <MyButton size={size} color={color}>
                    <AddIcon />
                </MyButton>
            </Grid>
            <Grid item>
                <MyButton fab size={size} color={color}>
                    <AddIcon />
                </MyButton>
            </Grid>
        </Grid>
    )
}