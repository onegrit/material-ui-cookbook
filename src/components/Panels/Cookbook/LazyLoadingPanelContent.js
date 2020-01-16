import React, { useState, Fragment } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const fetchPanelContent = (index) => (
    new Promise((resolve) => (
        setTimeout(
            () => (
                resolve([
                    'First panel content...',
                    'Second panel content...',
                    'Third panel content...',
                    'Fourth panel content...'
                ][index])
            ),
            1000
        )
    ))
)
// panelDetails:进度条样式
const useStyles = makeStyles((theme) => ({
    panelDetails: {
        flexDirection: 'column'
    }
}))

export default function LazyLoadingPanelContent() {
    const classes = useStyles()
    const [panels, setPanels] = useState([
        { title: 'First Panel Title' },
        { title: 'Second Panel Title' },
        { title: 'Third Panel Title' },
        { title: 'Fourth Panel Title' }
    ]);
    /**
     * First, this function checks if the panel that's expanded has any content in its state. If not, 
     * you know that you have to fetch it by calling fetchPanelContent(). When the returned promise resolves, 
     * you can call setPanels() to update the panels array and set the content at the appropriate index.
     * @param {*} index 
     */
    /**
     * 进度条调整
     * Finally, let's make sure that the API call to load content isn't made when the panel is collapsing. 
     * This requires an adjustment to the onChange() handler:
     * The second argument passed to this function, expanded, tells you whether or not the panel is expanding. 
     * If this value is false, you know that the panel is collapsed and that the API call shouldn't be made. 
     * This condition has been added to look for content that has already been loaded for the panel.
     * @param {*} index 
     * 判断是否加载数据的条件 是否有人内容&& 是否展开
     * 是否展开：如果已展开说明内容已经加载
     */
    const onChange = index => (e,expanded) => {
        if (!panels[index].content && expanded) {
            fetchPanelContent(index).then(content => {
                const newPanels = [...panels]; //函数式编程：创建一个新的数组
                newPanels[index] = { ...newPanels[index], content };
                setPanels(newPanels);
            });
        }
    };
    // MaybeProgess:加载进度条；如果loading为ture，则加载进度条；loading为true的条件是panel中没有内容
    const MaybeProgress = ({loading}) => (
        loading ? <LinearProgress />: null
    )
    
    return (
        <Fragment>
            {panels.map((panel, index) => (
                <ExpansionPanel key={index} onChange={onChange(index)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{panel.title}</Typography>
                    </ExpansionPanelSummary>
                     {/* panelDetails:进度条样式 */}
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        {/* MaybeProgess:加载进度条 
                        The loading property is true until the API call populates the content state for 
                        the given panel. This means that the progress indicator will be visible until the content loads.
                        Once loaded, the content is rendered in place of the progress indicator.
                        loading的条件是：panel中没有内容
                        */}
                        <MaybeProgress loading={!panel.content} />
                        <Typography>{panel.content}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </Fragment>
    );
}
