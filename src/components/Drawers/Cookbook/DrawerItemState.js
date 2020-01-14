import React, { useState } from 'react'

import HomeIcon from '@material-ui/icons/Home'
import WebIcon from '@material-ui/icons/Web'
import { Grid, Typography, Drawer, List, ListItemIcon, ListItemText, Button, ListItem } from '@material-ui/core'


//抽离出列表组件
const ListItems = ({ items, onClick }) => (
    items
        .filter(({ hidden }) => (!hidden))
        .map(({ label, disabled, Icon }, i) => (
            <ListItem
                button
                key={i}
                disabled={disabled}
                onClick={onClick(label)}
            >
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText>{label}</ListItemText>
            </ListItem>
        ))
)
export default function DrawerItemState() {
    // open控制抽屉的可见性；注意Icon首字母是大写的，说明是一个React组件
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState('Home')
    const [items] = useState([
        { label: 'Home', Icon: HomeIcon },
        { label: 'Page 2', Icon: WebIcon },
        { label: 'Page 3', Icon: WebIcon, disabled: true },
        { label: 'Page 4', Icon: WebIcon },
        { label: 'Page 5', Icon: WebIcon, hidden: true },
    ])

    const onClick = (content) => () => {
        setOpen(false)
        setContent(content)
    }
    return (
        <Grid container justify="space-between">
            <Grid item>
                <Typography>{content}</Typography>
            </Grid>
            <Grid item>
                <Drawer open={open} onClose={() => (setOpen(false))}>
                    <List>
                        {
                            <ListItems items={items} onClick={onClick} />
                        }
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => (setOpen(!open))}>
                    {open ? "Hide" : "Show"} Drawer
                </Button>
            </Grid>
        </Grid>
    )
}