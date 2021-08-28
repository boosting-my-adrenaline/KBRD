import React, { useState, useEffect, useRef } from 'react'
import { useKeyPress } from '../../../utils/useKeyPress'
import ArrowLeftLogo from '../../../static/ArrowLeft.svg'

export const ARight: React.FC = () => {
  const ArrowRight: boolean = useKeyPress('ArrowRight')

  return (
    <button
      className="outline-none invisible md:visible p-1 mx-5 rounded-md bg-red-200 border border-red-500 transition duration-75 hover:bg-red-100 "
      style={{
        boxShadow: ArrowRight
          ? '-1px 1px 4px 1px rgba(128, 0, 0, 1)'
          : '-2px 2px 4px 3px rgba(128, 0, 0, 0.85)',
      }}
    >
      <img
        alt="AL"
        src={ArrowLeftLogo}
        className="w-6 h-6 transform -rotate-180"
      />
    </button>
  )
}
