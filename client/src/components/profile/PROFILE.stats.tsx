import { motion } from 'framer-motion'
import React from 'react'

export const PROFILEstats: React.FC = () => {
  const list = { hidden: { opacity: 0 }, visible: { opacity: 100 } }
  const items = { hidden: { x: -10, opacity: 0 } }

  return (
    <div>
      {/* <motion.div
        // animate={{ x: 100 }}

        // drag={`x`}
        // dragConstraints={{ left: -100, right: 100 }}

        className={`w-100px h-100px bg-purple-400 rounded-xl cursor-move`}
      ></motion.div> */}

      {/* <motion.ul animate={`hidden`} variants={list}>
        <motion.li variants={items}>BOOK</motion.li>
        <motion.li variants={items}>TAP</motion.li>
        <motion.li variants={items}>INFO</motion.li>
      </motion.ul> */}
    </div>
  )
}
