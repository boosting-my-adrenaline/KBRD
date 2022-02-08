import React, { useEffect, useState, useRef } from 'react'
import { MainState } from '../../../App'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { NAVlink } from './NAV.link'

interface IProps {
  mainState: MainState
  onClick(state: MainState): void
}

export const NAVlinks: React.FC<IProps> = ({ mainState, onClick }) => {
  const links = [MainState.BOOK, MainState.TAP, MainState.INFO].map((el) => (
    <NAVlink key={el} link={el} mainState={mainState} onClick={onClick} />
  ))

  return (
    <div className={` borde-black flex flex-row items-center justify-center`}>
      <div
        className={`z-10 borde borde-black flex flex-row items-center justify-center gap-12`}
        style={{ width: 310, height: 35 }}
      >
        {links}
      </div>
    </div>
  )
}
