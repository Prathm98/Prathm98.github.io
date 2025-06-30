import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'

const Title = styled(Typography)({
  fontSize: '40px',
  marginTop: '30px',
  '@media (max-width: 600px) ': {
    fontSize: '35px',
    marginTop: '0',
  },
  marginBottom: '10px',
})

const Description = styled(Typography)({
  lineHeight: 1.7,
  letterSpacing: '1px',
  '@media (max-width: 600px) ': {
    fontSize: '1rem',
  },
})

const FeatureText = ({ title, description }) => {
  return (
    <>
      <Title variant='h4' fontWeight='bold'>
        {title}
      </Title>

      <Description variant='h6' color='text.secondary'>
        {description}
      </Description>
    </>
  )
}

FeatureText.Title = (props) => (
  <Title {...props} variant='h4' fontWeight='bold' />
)
FeatureText.Description = Description
export default FeatureText
