import React, { useState } from 'react'
import { List as VirtualList, AutoSizer } from 'react-virtualized'

import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, Paper, List } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    list: {
        height: 300
    },
    paper: {
        margin: theme.spacing(3)
    }
}))
// 生成器函数
function* genItems() {
    for (let i = 0; i < 1000; i++) {
        yield `Item ${i}`
    }
}

export default function ScrollingLists() {
    const classes = useStyles();
    // the spread operator is used to turn the generated items into an array for the component state:
    const [items, setItems] = useState([...genItems()])
    /**
     * This function returns the ListItem component that should be rendered at the given index. 
     * Instead of manually mapping this component to items, the List component from react-virtualized orchestrates 
     * when to call it for you, based on how the user scrolls through the list.The key and the style values 
     * that are passed to this function are required by react-virtualized in order to work correctly. For example, 
     * the style value is used to control the visibility of the item as scrolling happens. The isScrolling value is used to 
     * render different data while the list is actively being scrolled. For example, imagine that instead of just a text label 
     * within the list item, you also had an icon, along with other controls that are all based on state. 
     * Trying to render these things while scrolling is going on is expensive and wasteful. Instead, you can render something 
     * that's less resource intensive, such as a placeholder string: '...'.
     * @param { * } param0 
     */
    const rowRenderer = ({ index, isScrolling, key, style }) => {
        const item = items[index]

        return (
            <ListItem button key={key} style={style}>
                <ListItemText primary={isScrolling ? '...' : item} />
            </ListItem>
        )
    }
    return (
        <Paper className={classes.paper}>
            {/*
            The List component is the container for everything else. Next, the AutoSizer component from react-virtualized 
            figures out the width of the list, which is needed as a VirtualList property.
            The List component from react-virtualized also takes the height of the list, the height of each row, and the row count, 
            in order to determine which rows to render. With this in place, you never have to worry about the performance of your 
            application because of a list component with too many items.
            */}
            <List className={classes.list}>
                <AutoSizer disableHeight>
                    {
                        ({ width }) => (
                            <VirtualList
                                width={width}
                                height={300}
                                rowHeight={50}
                                rowCount={items.length}
                                rowRenderer={rowRenderer}
                            />
                        )}
                </AutoSizer>
            </List>
        </Paper>
    )
}