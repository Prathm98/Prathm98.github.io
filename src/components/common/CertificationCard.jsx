import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import React from 'react'
import profile from '../../assets/profile.jpg'
import Typography from '@mui/material/Typography'

const CertificationCard = () => {
  return (
    <Card>
      <Grid item size='12'>
        <Grid item size={{ sx: 12, md: 3 }}>
          <img
            src={profile}
            style={{ height: '200px', width: 'auto', alignSelf: 'center' }}
          />
        </Grid>
        <Grid item size={{ sx: 12, md: 9 }}>
          <Typography
            gutterBottom
            variant='h6'
            fontWeight={'bold'}
            component='div'
          >
            Certification Title
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: 'text.secondary', padding: '10px' }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eius
            voluptate assumenda sint magnam repellat vitae, officiis repudiandae
            itaque adipisci sunt iure facere, voluptatum, recusandae ea eum
            alias! Tempore, aut?
          </Typography>
          <a>Link</a>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CertificationCard
