import Button from '@mui/material/Button'
import { blueGrey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
const CustomButton = styled(Button)(({ theme, variant }) => ({
  color:
    variant === 'contained'
      ? theme.palette.getContrastText(blueGrey[500])
      : theme.palette.mode === 'light'
      ? blueGrey[800]
      : blueGrey[50],
  backgroundColor: variant === 'contained' ? blueGrey[700] : 'transparent',
  '&:hover': {
    backgroundColor:
      variant === 'contained'
        ? blueGrey[400]
        : theme.palette.mode === 'light'
        ? blueGrey[50]
        : blueGrey[900],
  },
}))

export default CustomButton
