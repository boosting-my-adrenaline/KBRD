import { Button } from '@mui/material'
import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { PhotoMiniature } from '../navbar/nav-components/PhotoMiniature'

interface IProps {
  statsSection: boolean
}

export const PROFILEinfo: React.FC<IProps> = ({ statsSection }) => {
  const username = useTypedSelector((state) => state.auth.user?.user_name)

  return (
    <div
      className={`absolute flex flex-row items-center gap-6`}
      style={{
        transition: '0.65s ease-in-out',
        top: 20,
        left: statsSection ? 70 : 1220,
      }}
    >
      <div
        style={{
          overflow: 'hidden',

          width: 100,
          height: 60,
          borderRadius: 40,
          border: '1px solid black',
        }}
      >
        <PhotoMiniature />
      </div>
      <div className={`mr-10 text-4xl`}>{username}</div>
    </div>
  )
}
