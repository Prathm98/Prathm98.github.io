import React, { useState } from 'react'
import FeatureText from '../../components/common/FeatureText'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'
import Card from '@mui/material/Card'
import { achievements } from '../../data/achievements'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

const RenderCard = (item) => {
  const [show, setShow] = useState(item.show)
  return (
    <Card sx={{ padding: '5px' }}>
      <Typography gutterBottom variant='h6' fontWeight={'bold'} component='div'>
        <Avatar sx={{ width: 50, height: 50, margin: '10px auto' }}>
          {item.icon}
        </Avatar>
        {item.title}
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: 'text.secondary', padding: '10px' }}
      >
        {item.description.slice(0, show ? -1 : 30)}{' '}
        <span
          onClick={() => setShow((prev) => !prev)}
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          Show {show ? 'Less' : 'More'}
        </span>
      </Typography>
    </Card>
  )
}

const Section6 = () => {
  return (
    <div id='achivements' style={{ textAlign: 'center', marginTop: '50px' }}>
      <FeatureText.Title>Achievements</FeatureText.Title>
      <Box>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
          {achievements.map((item, index) => (
            <RenderCard {...item} show={index % 2} />
          ))}
        </Masonry>
      </Box>
    </div>
  )
}

export default Section6
