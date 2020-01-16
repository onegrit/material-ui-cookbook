import React, { useState } from 'react'
import { List, ListItemText, ListItem } from '@material-ui/core'

export default function UsingStateToRenderListItems() {
    /**
     * 列表数据作为state
     */
    const [items, setItems] = useState([
        { name: 'First Item', timestamp: new Date() },
        { name: 'Second Item', timestamp: new Date() },
        { name: 'Third Item', timestamp: new Date() },
        { name: 'Fourth Item', timestamp: new Date() },
    ])

    return (
        // 渲染列表：List->ListItem->ListItemText
        <List>
            {
                items
                    .map((item, index) => (
                        // The button property makes the list item behave like a button.
                        // The dense property removes extra padding from the list item. Without this property, 
                        //the list takes up more space on the screen.
                        <ListItem key={index} button dense>
                            <ListItemText
                                primary={item.name}
                                secondary={item.timestamp.toLocaleString()}
                            />
                        </ListItem>

                    ))

            }
        </List>
    )
}
