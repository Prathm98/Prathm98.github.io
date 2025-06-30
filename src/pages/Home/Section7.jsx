import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Engineer of the Quarter',
      description: 'Awarded for performance optimization at ABC Tech.',
    },
    {
      title: 'ReactCon Speaker 2023',
      description:
        'Spoke on "Scaling React Apps on the Cloud" at ReactCon India.',
    },
    {
      title: 'Open Source Contributor',
      description: 'Published tools used by 1000+ developers globally.',
    },
    {
      title: 'Innovation Challenge Winner',
      description:
        'Won company-wide hackathon for innovative cloud-based solution.',
    },
    {
      title: 'Technical Blogger',
      description: 'Published widely read articles on full-stack engineering.',
    },
  ]

  const [index, setIndex] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const visibleCards = isMobile ? 1 : isTablet ? 2 : 3

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % achievements.length)
  }

  const getVisibleAchievements = () => {
    const result = []
    for (let i = 0; i < visibleCards; i++) {
      const currentIndex = (index + i) % achievements.length
      result.push(achievements[currentIndex])
    }
    return result
  }

  return (
    <Container sx={{ py: 10 }}>
      <Fade in timeout={1000}>
        <Box textAlign='center'>
          <Typography variant='subtitle1' color='primary'>
            Milestones
          </Typography>
          <Typography variant='h4' fontWeight='bold' gutterBottom>
            Achievements
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mt: 4,
              overflow: 'hidden',
            }}
          >
            {getVisibleAchievements().map((item, i) => (
              <Paper key={i} elevation={3} sx={{ p: 3, minWidth: 250 }}>
                <Typography variant='h6' fontWeight='bold'>
                  {item.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mt: 1 }}
                >
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Box>
          <Stack direction='row' spacing={2} justifyContent='center' mt={3}>
            <IconButton onClick={handlePrev}>
              <ArrowBack />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForward />
            </IconButton>
          </Stack>
        </Box>
      </Fade>
    </Container>
  )
}

const Section7 = () => {
  return (
    <div>
      <AchievementsSection />
    </div>
  )
}

export default Section7
