import React from 'react'
import Section1 from './Section1'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Section2 from './Section2'
import Section3 from './Section3'
import Section5 from './Section5'
import Section4 from './Section4'
import Section6 from './Section6'
import CertificationCard from '../../components/common/CertificationCard'
import Grid from '@mui/material/Grid'

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }} id='home'>
      <Container
        maxWidth='lg'
        style={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Container>
    </Box>
  )
}

export default Home
