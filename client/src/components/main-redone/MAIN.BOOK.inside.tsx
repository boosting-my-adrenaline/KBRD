import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useNavAction } from '../../hooks/useAction'
import { Chapters } from '../../types/nav'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { BOOKContainer } from '../book-redone/BOOK.container'

interface IProps {
  show: boolean
}

export const MAINBOOKinside: React.FC<IProps> = ({ show }) => {
  const [STRING, setSTRING] = useState()
  const [demo, setDemo] = useState(true)

  const { changeChapter } = useNavAction()
  let navigate = useNavigate()

  useDidMountEffect(() => {
    let id = setTimeout(
      () => {
        if (show) {
          setDemo(false)
        } else {
          setDemo(true)
        }
      },
      show ? 800 : 200
    )
    changeChapter(Chapters.B)
    // if (show) {
    //   changeChapter(Chapters.B)
    // } else {
    //   changeChapter(Chapters.MAIN)
    // }
    // setTimeout(() => navigate(`/book`), 600)
  }, [show])
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={!show ? { scale: 0.75 } : { scale: 1 }}
      className={`flex justify-center items-center w-f`}
    >
      <div className={`flex items-center justify-center  w-f`}>
        <BOOKContainer demo={demo} />
      </div>
    </motion.div>
  )
}
