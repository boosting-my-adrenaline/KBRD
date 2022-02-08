import { motion } from 'framer-motion'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import useLanguage from '../../hooks/useLanguage'

interface IProps {
  tag: string
  value: number
  setValue: (value: number) => void
  min: number
  max: number
  step: number
  postTag?: string
}

export const NBAslider: React.FC<IProps> = ({
  tag,
  value,
  setValue,
  min,
  max,
  step,
  postTag = ``,
}) => {
  const getColor1 = () => {
    const progress =
      (Math.ceil((1 - (value - min) / (max - min)) * 100) + 10) * 0.8

    if (progress >= 0 && progress < 10) {
      return `rgb(255, 241, 242)`
    } else if (progress >= 10 && progress < 20) {
      return `rgb(255, 228, 230)`
    } else if (progress >= 20 && progress < 30) {
      return `rgb(254, 205, 211)`
    } else if (progress >= 30 && progress < 40) {
      return `rgb(253, 164, 175)`
    } else if (progress >= 40 && progress < 50) {
      return `rgb(251, 113, 133)`
    } else if (progress >= 50 && progress < 60) {
      return `rgb(244, 63, 94)`
    } else if (progress >= 60 && progress < 70) {
      return `rgb(225, 29, 72)`
    } else if (progress >= 70 && progress < 80) {
      return `rgb(190, 18, 60)`
    } else if (progress >= 80 && progress < 90) {
      return `rgb(159, 18, 57)`
    } else if (progress >= 90) {
      return `rgb(136 19 55)`
    }
  }

  const { isEng } = useLanguage()

  return (
    <div
      className={`w-150px flex flex-col items-center justify-center text-gray-800 ${
        isEng ? `font-courier` : `font-CourierC`
      } w`}
    >
      <span className={`flex items-center justify-center whitespace-nowrap`}>
        {tag}: {value}
        {` `}
        {postTag}
      </span>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={setValue}
        railStyle={{ backgroundColor: `rgb(186, 230, 253)` }}
        trackStyle={{
          backgroundColor: getColor1(),
          transition: `background-color 0.15s ease-in-out`,
        }}
        handleStyle={{
          border: `1px solid ${getColor1()}`,
          transition: `background-color 0.15s ease-in-out`,
        }}
        // dotStyle={{ backgroundColor: `black` }}
        // activeDotStyle={{ backgroundColor: 'black' }}
      />
    </div>
  )
}
