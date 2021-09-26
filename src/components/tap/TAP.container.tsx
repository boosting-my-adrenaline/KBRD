import React, { useState, useEffect, useRef } from 'react'
import { TAPshooting } from './TAP.shooting'
import { TAPtap } from './shooting/TAP.tap'
// import { StyledEngineProvider } from '@mui/material/styles'

export const TAPContainer: React.FC = () => {
  return (
    <div>
      <TAPshooting />
    </div>
  )
}
