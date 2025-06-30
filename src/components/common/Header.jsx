import * as React from 'react'
import { alpha, styled, useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ThemeToggle from './ThemeToggle'
import Logo from './logo'
import CustomButton from './CustomButton'
import Resume from '../../assets/PRATHMESH_WAKODIKAR_RESUME.pdf'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
}))

export default function Header() {
  const [open, setOpen] = React.useState(false)

  const { mode, setMode } = useColorScheme()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AppBar
      position='fixed'
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        pt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth='lg'>
        <StyledToolbar disableGutters>
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <CustomButton
                variant='text'
                color='info'
                size='small'
                onClick={() => scrollTo('home')}
              >
                HOME
              </CustomButton>
              <CustomButton
                onClick={() => scrollTo('experience')}
                variant='text'
                color='info'
                size='small'
              >
                Experience
              </CustomButton>
              <CustomButton
                variant='text'
                color='info'
                size='small'
                onClick={() => scrollTo('technology')}
              >
                Skills
              </CustomButton>
              <CustomButton
                variant='text'
                color='info'
                size='small'
                onClick={() => scrollTo('achivements')}
              >
                Achievements
              </CustomButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <a
              href={Resume}
              download='Prathmesh_Wakodikar_Resume'
              target='_blank'
            >
              <CustomButton color='primary' variant='contained' size='small'>
                Download Resume
              </CustomButton>
            </a>
            <ThemeToggle
              checked={mode === 'dark'}
              onChange={(event) => {
                console.log(event.target.checked)
                setMode(event.target.checked ? 'dark' : 'light')
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <a
              href={Resume}
              download='Prathmesh_Wakodikar_Resume'
              target='_blank'
            >
              <IconButton>
                <DownloadForOfflineIcon />
              </IconButton>
            </a>
            <IconButton aria-label='Menu button' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='top'
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Logo />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                <MenuItem onClick={() => scrollTo('experience')}>
                  Experience
                </MenuItem>
                <MenuItem onClick={() => scrollTo('technology')}>
                  Skills
                </MenuItem>
                <MenuItem onClick={() => scrollTo('achivements')}>
                  Achievements
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}
