import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}))

function ListItemLink(props){
    return <ListItem button component="a" {...props} />
}

export default function SimpleList() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <List component="nav" arial-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
                
            </List>
            <Divider />
            <List component="nav" arial-label="Secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                {/* 这里显示了如何使用ListItem渲染了一个Link */}
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemLink>
            </List>
        </div>
    )
}
