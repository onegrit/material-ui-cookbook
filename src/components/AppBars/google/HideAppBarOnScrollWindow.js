import React from 'react'
import PropTypes from 'prop-types'
import { useScrollTrigger, Slide, CssBaseline, AppBar, Typography, Toolbar, Container, Box } from '@material-ui/core'


function HideOnScroll(props) {
    const { children, window } = props
    const trigger = useScrollTrigger({ target: window ? window() : undefined })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}

export default function HideAppBarOnScrollWindow(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Scroll to Hide App Bar</Typography>
                    </Toolbar>

                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Box my={2}>
                    {
                        [...new Array(50)].map(() => (
                            `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )).join('\n')
                    }
                </Box>
            </Container>
        </React.Fragment>
    )
}