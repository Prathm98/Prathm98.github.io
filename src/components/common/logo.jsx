import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import logo from '../../assets/logo.svg'

const StyledLogo = styled(Box)(({ theme }) => ({
  height: '30px',
  img: {
    height: '100%',
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'unset',
  },
}))

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} />
    </StyledLogo>
  )
}

export default Logo
