import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// cnpm i -S react-window
import { FixedSizeList } from 'react-window';

/**
 * 大型列表渲染
 */

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  function renderRow(props){
      const {index,style} = props
      return (
          <ListItem button style={style} key={index}>
              <ListItemText primary={`Item ${index + 1}`} />
          </ListItem>
      )
  }

  renderRow.propTypes = {
      index:PropTypes.number.isRequired,
      style:PropTypes.object.isRequired
  }

  export default function VirtualizedList(){
      const classes = useStyles()

      return (
          <div className={classes.root}>
              {/* height和width是指滚动窗口的高和宽 */}
              <FixedSizeList height={600} width={500} itemSize={100} itemCount={1000}>
                  {renderRow}
              </FixedSizeList>
          </div>
      )
  }