import IconButton from '@mui/material/IconButton'
import { useColorScheme } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'

const SocialIcon = (props) => {
  const { mode } = useColorScheme()
  return (
    <Tooltip title={props.title}>
      <IconButton style={{ margin: '2px' }}>
        <a
          href={props.link}
          target='_blank'
          rel='noopener noreferrer'
          title={props.title}
          style={{ height: '30px', width: '30px' }}
        >
          <img
            src={props.img}
            style={{
              height: '28px',
              width: 'auto',
              filter: mode === 'dark' ? 'invert(1)' : 'unset',
            }}
          />
        </a>
      </IconButton>
    </Tooltip>
  )
}

export default SocialIcon
