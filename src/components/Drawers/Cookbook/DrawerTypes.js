import React, { useState } from 'react'
import { Grid, Drawer, List, ListItem, ListItemText, Button } from '@material-ui/core'


export default function DrawerTypes({ classes, variant }) {
    const [open, setOpen] = useState(false)
    return (
        <Grid container justify="space-between">
            {/* Drawer 
                属性open:为ture时，显示抽屉
             */}
            <Grid item>
                <Drawer
                    variant= "persistent"
                    open={open}
                    onClose={() => (setOpen(false))}
                >
                    <List>
                        <ListItem
                            button
                            onClick={() => (setOpen(variant !== 'temporary'))}>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => (setOpen(variant !== 'temporary'))}>
                            <ListItemText>Page 2</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => (setOpen(variant !== 'temporary'))}>
                            <ListItemText>Page 3</ListItemText>
                        </ListItem>

                    </List>
                </Drawer>

            </Grid>
            {/* 按钮 */}
            <Grid item>
                <Button onClick={() => (setOpen(!open))}>
                    {open ? "Hide" : "Show"} Drawer
                    </Button>
            </Grid>
        </Grid>
    )
}