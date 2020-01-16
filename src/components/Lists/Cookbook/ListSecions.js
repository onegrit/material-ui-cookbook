import React, { Fragment } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const ListSections = () => (
    <Fragment>
        <Typography variant="title">First Section</Typography>
        <List>
            <ListItem>
                <ListItemText primary="First" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Second" />
            </ListItem>
        </List>
        {/* 分割线 */}
        {/* <Divider /> */}
        <Typography variant="title">Second Section</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Third" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Fourth" />
            </ListItem>
        </List>
        {/* <Divider /> */}
        <Typography variant="title">Third Section</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Fifth" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Sixth" />
            </ListItem>
        </List>
    </Fragment>
);

export default ListSections;