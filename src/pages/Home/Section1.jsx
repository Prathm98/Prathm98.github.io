import Grid from '@mui/material/Grid'
import React from 'react'
import profile from '../../assets/profile.jpg'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import SocialIcon from '../../components/common/SocialIcon'
import { socialLinks } from '../../data/socialLinks.const'
import FeatureText from '../../components/common/FeatureText'
import { bio } from '../../data/details'

const Section1 = () => {
  return (
    <Grid container spacing={2} style={{ textAlign: 'center' }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <img
          src={profile}
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
            borderRadius: '50%',
            boxShadow: '5px 5px 5px #504f4f',
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 1 }}></Grid>
      <Grid size={{ xs: 12, md: 6 }} className='v-center'>
        <Grid item xs={12} md={6}>
          <Typography variant='h6' color='primary'>
            Hey There 👋 I am
          </Typography>
          <FeatureText.Title variant='h3' fontWeight='bold'>
            {bio.name}
          </FeatureText.Title>
          <Typography variant='h6' color='text.secondary'>
            {bio.role}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {bio.org}
          </Typography>
          <Stack direction='row' className='h-center' my={3} spacing={2}>
            {socialLinks.map((item) => (
              <SocialIcon {...item} />
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 1 }}></Grid>
    </Grid>
  )
}

export default Section1
