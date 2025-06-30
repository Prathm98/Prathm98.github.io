import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import FeatureText from '../../components/common/FeatureText'
import Grid from '@mui/material/Grid'
import CustomButton from '../../components/common/CustomButton'
import Drawer from '@mui/material/Drawer'
import { experience, experienceDetails } from '../../data/experience'
import useMediaQuery from '@mui/material/useMediaQuery'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import IconButton from '@mui/material/IconButton'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
const Item = ({ year, role, org, color, matches, duration }) => {
  return (
    <TimelineItem style={{ padding: '10px' }}>
      {matches && (
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align='right'
          variant='body2'
        ></TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={color}></TimelineDot>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant='h6' component='span'>
          {role}
        </Typography>

        <Typography>{org}</Typography>
        <Typography variant='body2'>
          {year}
          <br />
          {duration}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  )
}

const ExperienceDetails = ({ open, toggleDrawer }) => {
  return (
    <>
      <Drawer anchor='bottom' open={open} onClose={() => toggleDrawer(false)}>
        <div
          style={{ padding: '5px 20px', maxHeight: '75vh', overflow: 'auto' }}
        >
          <Typography variant='h3' my={2}>
            Experience
          </Typography>
          {experienceDetails.map((item) => (
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel1-header'
              >
                <div>
                  <FeatureText.Description component={'h5'} fontWeight='bold'>
                    {item.role}
                  </FeatureText.Description>
                  <FeatureText.Description component={'h6'}>
                    {item.org}
                  </FeatureText.Description>
                  <FeatureText.Description
                    component='body1'
                    color='text.secondary'
                  >
                    {item.year}
                  </FeatureText.Description>
                </div>
              </AccordionSummary>
              <AccordionDetails>{item.content}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Drawer>
    </>
  )
}

export default function Section3() {
  const matches = useMediaQuery('(min-width:600px)')
  const [open, setOpen] = React.useState(false)
  return (
    <Grid style={{ textAlign: 'center' }}>
      <FeatureText.Title>
        Experience
        <IconButton
          size='large'
          aria-label='open in full'
          onClick={() => setOpen(true)}
        >
          <OpenInFullIcon />
        </IconButton>
      </FeatureText.Title>
      <Timeline
        position={matches ? 'alternate' : 'left'}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experience.map((item) => (
          <Item {...item} matches={matches} />
        ))}
      </Timeline>
      <Grid size={12} style={{ textAlign: 'right' }}>
        <CustomButton
          variant='text'
          startIcon={<OpenInFullIcon />}
          onClick={() => setOpen(true)}
        >
          Open in details
        </CustomButton>
        <ExperienceDetails open={open} toggleDrawer={setOpen} />
      </Grid>
    </Grid>
  )
}
