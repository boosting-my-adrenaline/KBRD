import React from 'react'
import { motion } from 'framer-motion'

export const Test: React.FC = () => {
  return (
    <div
      className={` w-f h-f pt-20 px-10`}
      style={{ fontFamily: `Bebas Neue` }}
    >
      <div>
        <motion.span
          initial={{ x: -200 }}
          animate={{ x: 20 }}
          className={`absolute text-[8em]  text-[#A486B4]`}
        >
          Don't Look
        </motion.span>
        <br />
        <motion.span
          initial={{ y: 1000 }}
          animate={{ fontSize: `40em`, color: `#3E8CBD`, y: -70 }}
          className={`absolute `}
          style={{ transform: `translateY(-200px) ` }}
        >
          UP
        </motion.span>
      </div>
      <motion.div animate={{ x: 370, scale: 0.8 }} className={`absolute`}>
        <motion.span
          initial={{ x: -180, color: `#8A98B2` }}
          animate={{ x: 70 }}
          className={`absolute whitespace-nowrap`}
        >
          I love you
        </motion.span>
        <motion.span
          initial={{
            x: 2150,
            color: `#8A98B2`,
            fontSize: `10em`,
          }}
          animate={{ y: -58, x: 410, letterSpacing: `0.51em` }}
          className={`absolute`}
        >
          JENNIFER
        </motion.span>
        <br />
        <motion.span
          initial={{ y: 1000 }}
          animate={{
            fontSize: `20em`,
            color: `#5ECC91`,
            y: -10,
            x: 400,
          }}
          className={`absolute `}
          style={{ transform: `translateY(-200px) ` }}
        >
          LAWRENCE
        </motion.span>
      </motion.div>
      <motion.div animate={{ x: 150, y: 250 }} className={`absolute`}>
        <motion.span
          initial={{
            x: 2150,
            color: `#A4C27D`,
            fontSize: `10em`,
          }}
          animate={{ y: -8, x: 370, letterSpacing: `` }}
          className={`absolute`}
        >
          Leonardo
        </motion.span>
        <br />
        <motion.span
          initial={{ y: 1000 }}
          animate={{
            fontSize: `15.5em`,
            color: `#BE6B27`,
            y: 68,
            x: 203,
          }}
          className={`absolute `}
          style={{ transform: `translateY(-200px) ` }}
        >
          DICAPRIO
        </motion.span>
      </motion.div>
    </div>
  )
}
