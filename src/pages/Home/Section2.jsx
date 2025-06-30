import Grid from '@mui/material/Grid'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FeatureText from '../../components/common/FeatureText'
import { summary } from '../../data/details'

const Section2 = () => {
  return (
    <Box id='about' style={{ padding: '20px', textAlign: 'center' }}>
      <Grid container spacing={2}>
        <Grid size={{ sm: 1, md: 2, lg: 3 }}></Grid>
        <Grid size={{ sm: 10, md: 8, lg: 6 }}>
          <FeatureText title='Professional Summary' description={summary} />
        </Grid>
        <Grid size={{ sm: 1, md: 2, lg: 3 }}></Grid>
      </Grid>
      <span id='experience'></span>
    </Box>
  )
}

export default Section2
