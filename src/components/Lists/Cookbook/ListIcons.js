import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
/**
 * 需求要点：
 *  如果选择列表项，则更改图标为对号圆圈
 * @param {}} param0 
 */

const MaybeSelectedIcon = ({ selected, Icon }) => (
    selected ? <CheckCircleOutlineIcon /> : <Icon />
)

export default function ListIcons() {
    const [items, setItems] = useState([
        { name: 'First User' },
        { name: 'Second User' },
        { name: 'Third User' },
    ])

    const onClick = index => () => {
        const item = items[index];
        const newItems = [...items];
        newItems.map((item) => (item.selected = false))
        newItems[index] = { ...item, selected: !item.selected };
        setItems(newItems);
    };
    return (
        <List>
            {
                items
                    .map((item, index) => (
                        <ListItem key={index}
                         button
                         selected={item.selected}
                         onClick={onClick(index)}
                         >
                            <ListItemIcon>
                                <MaybeSelectedIcon selected={item.selected} Icon={AccountCircleIcon} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))
            }
        </List>
    )
}
