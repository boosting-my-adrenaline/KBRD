import { motion } from 'framer-motion'
import React from 'react'
import { useAuth } from '../../hooks/auth.hook'
import useDarkMode from '../../hooks/useDarkMode'
import { PhotoMiniature } from '../navbar/nav-components/PhotoMiniature'

interface IProps {
  statsSection: boolean
}

export const PROFILEinfo: React.FC<IProps> = ({ statsSection }) => {
  const { email } = useAuth()

  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      animate={{ x: statsSection ? 0 : 1150 }}
      transition={{ duration: 1, ease: `` }}
      className={`absolute flex flex-row items-center gap-6`}
      style={{
        top: 20,
        // left: statsSection ? 70 : 1220,
        left: 70,
      }}
    >
      <div
        className={`w-100px h-60px rounded-40px overflow-hidden `}
        style={{
          border: isDarkMode
            ? '1px solid rgb(168 85 247)'
            : '1px solid rgb(23, 23, 23)',
        }}
      >
        <PhotoMiniature />
      </div>
      <div className={`mr-10 text-4xl`}>{email}</div>
    </motion.div>
  )
}
