import { motion } from 'framer-motion'
import React from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import { ExpMSG } from './LEVEL.container'
import { LEVELicon } from './LEVEL.icon'
import { LEVELinfo } from './LEVEL.info'

interface IProps {
  exp: [number, number]
  level: number
  expMSG: ExpMSG
  setHide(hide: boolean): void
  keyboard: boolean
}

export const LEVELlevel: React.FC<IProps> = ({
  exp,
  level,
  expMSG,
  setHide,
  keyboard,
}) => {
  const { isDarkMode } = useDarkMode()

  const bgColor = (): [string, string] => {
    switch (level) {
      case 1:
        return ['bg-yellow-300', 'bg-yellow-50']
      case 2:
        return ['bg-emerald-200', 'bg-emerald-50']
      case 3:
        return ['bg-emerald-300', 'bg-emerald-50']
      case 4:
        return ['bg-rose-400', 'bg-rose-50']
      case 5:
        return ['bg-rose-500', 'bg-rose-50']
      case 6:
        return ['bg-rose-600', 'bg-rose-50']
      case 7:
        return ['bg-yellow-400', 'bg-yellow-50']
      case 8:
        return ['bg-red-400', 'bg-red-50']
      case 9:
        return ['bg-teal-300', 'bg-teal-50']
      case 10:
        return ['bg-cyan-200', 'bg-cyan-200']
      default:
        return ['', '']
    }
  }

  return (
    <div className={`w-1028px -translate-y-10px mx-auto flex flex-row gap-4`}>
      <LEVELicon level={level} expMSG={expMSG} />
      <div className={`w-f flex flex-row items-center`}>
        <div
          className={` w-f h-40px flex items-center justify-center overflow-hidden rounded-xl border ${
            isDarkMode ? `border-gray-300` : `border-gray-900 `
          }
            ${bgColor()[1]} 
          `}
        >
          <div className={`absolute`}>
            {expMSG ? (
              <div>{expMSG}</div>
            ) : (
              <>{level === 10 ? <> </> : `${exp[0]} / ${exp[1]}`}</>
            )}
          </div>
          <motion.div
            animate={{
              width: `${(100 / exp[1]) * exp[0]}%`,
            }}
            transition={{ ease: 'linear', duration: 0.07 }}
            className={` h-f flex items-center `}
            // style={{
            //   transition: `0.03s ease-out`,
            // }}
          >
            <div
              className={`w-f h-45px
               ${bgColor()[0]} transition duration-100 ease-in-out`}
            />
          </motion.div>
          <div className={`flex-grow`}></div>
        </div>
      </div>{' '}
      <LEVELinfo setHide={setHide} keyboard={keyboard} />
    </div>
  )
}
