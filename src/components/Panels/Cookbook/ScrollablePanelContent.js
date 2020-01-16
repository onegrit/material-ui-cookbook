import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/**
 * Panel content uses flex box styles to lay out its content. It flows according to row direction by default, 
 * so you have to set the flexDirection style to column if you want the content to flow in a top-down direction. 
 * Next, you can set a fixed height for your panel content—in this case, it's 150px. Finally, the overflow style 
 * set to auto will enable vertical scrolling for the panel content.
 * 
 * @param { * } theme 
 */
const styles = theme => ({
    panelDetails: {
        flexDirection: 'column',
        height: 150,
        overflow: 'auto'
    }
});
/**
 * IpsumContent组件只是一个方便的组件，它包含内容的段落，因此您不必在每个面板中都重复它。 
 * 
 */
const IpsumContent = () => (
    <Fragment>
        <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ultricies nibh ut ipsum placerat, eget egestas leo imperdiet.
            Etiam consectetur mollis ultrices. Fusce eu eros a dui maximus
            rutrum. Aenean at dolor eu nunc ultricies placerat. Sed finibus
            porta sapien eget euismod. Donec eget tortor non turpis
            hendrerit euismod. Phasellus at commodo augue. Maecenas
            scelerisque augue at mattis pharetra. Aenean fermentum sed neque
            id feugiat.
    </Typography>

        <Typography paragraph>
            Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam
            tincidunt diam in nisi pretium, sit amet tincidunt nisi aliquet.
            Proin quis justo consectetur, congue nisi nec, pharetra erat. Ut
            volutpat pulvinar neque vitae vestibulum. Phasellus nisl risus,
            dapibus at sapien in, aliquam tempus tellus. Integer accumsan
            tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
            vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
            Vivamus a lacus in dui vehicula tincidunt.
            Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam
            tincidunt diam in nisi pretium, sit amet tincidunt nisi aliquet.
            Proin quis justo consectetur, congue nisi nec, pharetra erat. Ut
            volutpat pulvinar neque vitae vestibulum. Phasellus nisl risus,
            dapibus at sapien in, aliquam tempus tellus. Integer accumsan
            tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
            vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
            Vivamus a lacus in dui vehicula tincidunt.
            Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam
            tincidunt diam in nisi pretium, sit amet tincidunt nisi aliquet.
            Proin quis justo consectetur, congue nisi nec, pharetra erat. Ut
            volutpat pulvinar neque vitae vestibulum. Phasellus nisl risus,
            dapibus at sapien in, aliquam tempus tellus. Integer accumsan
            tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
            vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
            Vivamus a lacus in dui vehicula tincidunt.
    </Typography>

        <Typography paragraph>
            In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
            in turpis vel tempor. Vivamus tincidunt turpis vitae porta
            dignissim. Quisque condimentum augue arcu, quis tincidunt erat
            luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
            nec, molestie tellus. Donec commodo consequat gravida. Mauris in
            rhoncus tellus, eget posuere risus. Pellentesque eget lectus
            lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer condimentum, sapien varius vulputate lobortis, urna elit
            vestibulum ligula, sit amet interdum lectus augue ac eros.
            Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
            est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
            elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
            ipsum ex, fermentum eu pretium quis, posuere et velit.
            Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam
            tincidunt diam in nisi pretium, sit amet tincidunt nisi aliquet.
            Proin quis justo consectetur, congue nisi nec, pharetra erat. Ut
            volutpat pulvinar neque vitae vestibulum. Phasellus nisl risus,
            dapibus at sapien in, aliquam tempus tellus. Integer accumsan
            tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
            vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
            Vivamus a lacus in dui vehicula tincidunt.
            Aliquam erat volutpat. Donec sit amet venenatis leo. Nullam
            tincidunt diam in nisi pretium, sit amet tincidunt nisi aliquet.
            Proin quis justo consectetur, congue nisi nec, pharetra erat. Ut
            volutpat pulvinar neque vitae vestibulum. Phasellus nisl risus,
            dapibus at sapien in, aliquam tempus tellus. Integer accumsan
            tortor id dolor lacinia, et pulvinar est porttitor. Mauris a est
            vitae arcu iaculis dictum. Sed posuere suscipit ultricies.
            Vivamus a lacus in dui vehicula tincidunt.
    </Typography>
    </Fragment>
);

const ScrollablePanelContent = withStyles(styles)(({ classes }) => (
    <Fragment>
        
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>First</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <IpsumContent />
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Second</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <IpsumContent />
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Third</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <IpsumContent />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </Fragment>
));

export default ScrollablePanelContent;
