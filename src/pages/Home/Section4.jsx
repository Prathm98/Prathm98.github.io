import Grid from '@mui/material/Grid'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FeatureText from '../../components/common/FeatureText'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { techCategories, techStack } from '../../data/Techstack'
import { styled } from '@mui/material/styles'

const StyledTabs = styled(Tabs)({
  margin: '0 auto',
  width: 'fit-content',
  '@media (max-width: 800px)': {
    width: 'unset',
  },
})

const TechStackSection = ({ children, value = 0 }) => {
  return (
    <Container sx={{ py: 10 }}>
      <FeatureText.Title>Tools & Technologies</FeatureText.Title>
      {children}
      <Grid container spacing={2}>
        <Grid size={{ sm: 1, md: 2, lg: 3 }}></Grid>
        <Grid size={{ sm: 10, md: 8, lg: 6 }}>
          {techStack.map((techItem, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                gap: '20px',
                flexDirection: 'column',
                opacity: value === index ? 1 : 0,
                display: value === index ? 'flex' : 'none',
                transition: 'all .5s ease-in-out',
              }}
            >
              <Typography variant='h6' fontWeight='bold' gutterBottom>
                {techItem.title}
              </Typography>

              <FeatureText.Description color='text.secondary'>
                {techItem.summary}
              </FeatureText.Description>
              <Stack
                direction='row'
                gap={'5px'}
                style={{ justifyContent: 'center' }}
                flexWrap='wrap'
                mb={2}
              >
                {techItem.items.map((item, i) => (
                  <Chip
                    key={i}
                    label={item}
                    variant='outlined'
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Stack>
            </div>
          ))}
        </Grid>
        <Grid size={{ sm: 1, md: 2, lg: 3 }}></Grid>
      </Grid>
    </Container>
  )
}

const Section4 = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box id='technology' style={{ padding: '20px', textAlign: 'center' }}>
      <Box sx={{ bgcolor: 'background.paper' }}></Box>
      <TechStackSection value={value}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
          sx={{ maxWidth: '700px' }}
        >
          {techCategories.map((item, index) => (
            <Tab key={item} label={item} />
          ))}
        </StyledTabs>
      </TechStackSection>
    </Box>
  )
}

export default Section4
