import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/header/Header'
import Barcharts from '../../components/barcharts/Barcharts'
import Comments from "../../components/Comments/Comments"
import Numberbox from '../../components/serviceReminder/Numberbox'
const Index = () => {
    return (
        <Box m="20px" display="flex" flexDirection="column">

            <Box margin="0 0 100px 0">
                <Header title="Dashboard" />
            </Box>

            {/* grid & charts */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    gridColumn="span 3"
                    // backgroundColor="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    
                </Box>
            </Box>
        </Box>
    )
}

export default Index
