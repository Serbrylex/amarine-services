// react
import React from 'react';

// Material UI
import { Box } from '@mui/material'

// Components
import Header from '@components/header'
import Drawer from '@components/drawer'

const MainLayout = ({ children }) => {

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', width: '100vw', minHeight: '90vh' }}>
                <Drawer />
                <Box sx={{
                    textAlign: 'center',
                    width: '80vw'
                }}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default MainLayout