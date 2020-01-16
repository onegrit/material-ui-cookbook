import React, { useState } from 'react'
import { List, ListItemText, ListItem } from '@material-ui/core'

export default function UsingPropsToRenderListItems() {
    /**
     * 列表数据作为state
     */
    const [items, setItems] = useState([
        { name: 'First Item', timestamp: new Date(),selected:false },
        { name: 'Second Item', timestamp: new Date(),selected:false},
        { name: 'Third Item', timestamp: new Date() ,selected:false},
        { name: 'Fourth Item', timestamp: new Date(),selected:false},
    ])

    const onClick = (index) => () => {
        const item = items[index]
        const newItems = [...items]
        // 下面代码是修正源代码bug：如果selected不重置为false，则再次点击其他listitem时，原来选中的item还保持选中状态。
        newItems.map((item,index) => (item.selected=false))
        newItems[index] = { ...item, selected: !item.selected }
        setItems(newItems)
    }



    return (
        // 渲染列表：List->ListItem->ListItemText
        <List>
            {
                items
                    .map((item, index) => (
                        // 使用props渲染list item
                        // The selected property passed to the ListItem component will apply selected styles to the item when true. 
                        <ListItem
                            key={index}
                            button
                            dense
                            selected={item.selected}
                            onClick={onClick(index)}
                        >
                            <ListItemText
                                primary={item.name}
                                secondary={item.timestamp.toLocaleString()}
                                primaryTypographyProps={{
                                    color: item.selected ? 'primary' : undefined
                                }}
                            />
                        </ListItem>
                    ))
            }
        </List>
    )
}
