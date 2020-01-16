import React, { useState } from 'react'

import BluetoothIcon from '@material-ui/icons/Bluetooth'
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled'
import DevicesIcon from '@material-ui/icons/Devices'
import { List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
const MaybeBluetoothIcon = ({ bluetooth }) => (
    bluetooth ? <BluetoothIcon /> : <BluetoothDisabledIcon />
)

export default function ListControls() {
    const [items, setItems] = useState([
        { name: 'Device 1', bluetooth: true, Icon: DevicesIcon, power: true },
        { name: 'Device 2', bluetooth: true, Icon: DevicesIcon, power: true },
        { name: 'Device 3', bluetooth: true, Icon: DevicesIcon, power: true },
    ])

    const onBluetoothClick = (index) => () => {
        const newItems = [...items]
        const item = items[index]

        newItems[index] = { ...item, bluetooth: !item.bluetooth }
        setItems(newItems)

    }
    // The onToggleClick() function is used by both controls to toggle the state of the item.
    //create a toggle click handler that can handle updating both the Bluetooth and the power state of items
    const onToggleClick = (index, prop) => () => {
        const newItems = [...items]
        const item = items[index]

        newItems[index] = { ...item, [prop]: !item[prop] }
        setItems(newItems)
    }
    return (
        <List>
            {
                items
                    .map(({ Icon, ...item }, index) => (
                        // The disabled property of ListItem depends on  the power state of the item.
                        //注意：power也同时影响到了Item状态
                        <ListItem key={index} button disabled={!item.power}>

                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>

                            <ListItemText primary={item.name} />

                            <ListItemSecondaryAction>
                                <IconButton
                                    onClick={onToggleClick(index, 'bluetooth')}
                                    disabled={!item.power}
                                >
                                    <MaybeBluetoothIcon bluetooth={item.bluetooth} />
                                </IconButton>
                                <IconButton
                                    onClick={onToggleClick(index, 'power')}
                                >
                                    <PowerSettingsNewIcon />
                                </IconButton>
                            </ListItemSecondaryAction>

                        </ListItem>
                    ))
            }
        </List>
    )
}