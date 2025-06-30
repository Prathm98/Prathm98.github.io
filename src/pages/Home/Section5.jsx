import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import FeatureText from '../../components/common/FeatureText'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { education } from '../../data/education'
import CardActions from '@mui/material/CardActions'

const CardContainer = styled(Box)({
  display: 'flex',
  gap: '12px',
  '@media (max-width: 700px)': {
    flexDirection: 'column',
  },
})

const RenderContent = ({ title, year, percentage, uni, institute }) => (
  <Card style={{ width: '100%' }}>
    <CardContent
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography gutterBottom variant='h6' fontWeight={'bold'} component='div'>
        {title}
      </Typography>
      <div>
        <Typography variant='body1' sx={{ color: 'text.secondary' }}>
          {uni}
        </Typography>
        <Typography variant='body1' sx={{ color: 'text.secondary' }}>
          {institute}
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            {year}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            {percentage}
          </Typography>
        </div>
      </div>
    </CardContent>
  </Card>
)

const Section5 = () => {
  return (
    <div id='education' style={{ textAlign: 'center' }}>
      <FeatureText.Title>Education</FeatureText.Title>
      <CardContainer>
        {education.map((item) => (
          <RenderContent {...item} />
        ))}
      </CardContainer>
    </div>
  )
}

export default Section5
