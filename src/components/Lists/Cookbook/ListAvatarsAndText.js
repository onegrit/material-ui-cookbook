import React, { useState} from 'react'
import { List, ListItem, ListItemIcon, Avatar, ListItemText, Badge } from '@material-ui/core'
import clsx from 'clsx'
import MarkunreadIcon from '@material-ui/icons/Markunread'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import LowPriorityIcon from '@material-ui/icons/LowPriority'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    activeAvatar: {
        backgroundColor: theme.palette.primary[theme.palette.type]
    }
}))

export default function ListAvatarsAndText() {
    const classes = useStyles()
    const [items] = useState([
        {
            name: 'Unread',
            updated: '2 minutes ago',
            Icon: MarkunreadIcon,
            notifications: 1
        },
        {
            name: 'High Priority',
            updated: '30 minutes ago',
            Icon: PriorityHighIcon
        },
        {
            name: 'Low Priority',
            updated: '3 hours ago',
            Icon: LowPriorityIcon
        },
        {
            name: 'Junk',
            updated: '6 days ago',
            Icon: DeleteIcon
        }
    ])

    return (
        <List>
            {
                items
                    .map(({ Icon, ...item }, index) => (
                        <ListItem button>
                            <ListItemIcon>
                                {/* 
                                The circle that surrounds the icon is the Avatar component, and it helps the icon 
                                stand out. 
                                
                                */}
                                <Badge
                                    color={item.notifications ? 'secondary' : undefined}
                                    badgeContent={
                                        item.notifications ? item.notifications : null
                                    }
                                >
                                    <Avatar
                                        className={clsx({
                                            [classes.activeAvatar]: item.notifications
                                        })}
                                    >
                                        <Icon />
                                    </Avatar>
                                </Badge>

                            </ListItemIcon>
                            <ListItemText
                                primary={item.name}
                                secondary={item.updated}
                            />
                        </ListItem>
                    ))
            }
        </List>
    )
}