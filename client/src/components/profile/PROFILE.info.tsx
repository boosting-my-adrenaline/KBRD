import React from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { PhotoMiniature } from '../navbar/nav-components/PhotoMiniature'

interface IProps {
  statsSection: boolean
}

export const PROFILEinfo: React.FC<IProps> = ({ statsSection }) => {
  const { email } = useAuth()

  return (
    <div
      className={`absolute flex flex-row items-center gap-6 transition duration-650 ease-in-out`}
      style={{
        top: 20,
        left: statsSection ? 70 : 1220,
      }}
    >
      <div
        className={`overflow-hidden w-100px h-60px rounded-40px `}
        style={{
          border: '1px solid black',
        }}
      >
        <PhotoMiniature />
      </div>
      <div className={`mr-10 text-4xl`}>{email}</div>
    </div>
  )
}
