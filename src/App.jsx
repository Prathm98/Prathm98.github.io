import React from 'react'
import './App.css'
import Header from './components/common/Header'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Home from './pages/Home/Home'
import { FabToggle } from './components/common/ThemeToggle'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}))

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <FabToggle />
    </ThemeProvider>
  )
}

export default App
