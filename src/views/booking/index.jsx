import { Box } from '@chakra-ui/react'
import React from 'react'
import Search from './components/Search'

const index = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px={{ base: "40px", md: "80px", xl: "80px" }}>
        <Search/>
    </Box>
  )
}

export default index