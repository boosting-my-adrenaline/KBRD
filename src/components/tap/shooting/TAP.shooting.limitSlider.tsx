import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

// function valuetext(value: number) {
//   return `${value}°C`
// }

type IProps = {
  limit: number
  setLimit(lim: number): void
}

export const TAPshootingLimitSlider: React.FC<IProps> = ({
  limit,
  setLimit,
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setLimit(newValue as number)
  }

  return (
    <Box sx={{ width: 200 }} className="flex flex-row transform-translateX-">
      <Slider
        valueLabelDisplay="auto"
        value={limit}
        onChange={handleChange}
        step={1}
        marks
        min={3}
        max={25}
      />
    </Box>
  )
}
