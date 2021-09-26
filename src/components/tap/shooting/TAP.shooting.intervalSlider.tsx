import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

type IProps = {
  intervalPush: number
  setIntervalPush(int: number): void
}

export const TAPshootingIntervalSlider: React.FC<IProps> = ({
  intervalPush,
  setIntervalPush,
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setIntervalPush(newValue as number)
  }

  return (
    <Box sx={{ width: 200 }} className="flex flex-row transform-translateX-">
      <Slider
        valueLabelDisplay="auto"
        value={intervalPush}
        onChange={handleChange}
        step={100}
        marks
        min={200}
        max={1600}
      />
    </Box>
  )
}
