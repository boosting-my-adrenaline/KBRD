import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

interface IProps {
  messages: string[]
  setExpMSG(MSG: string | null): void
  setMessages(messages: string[]): void
}

export const LEVELmessenger: React.FC<IProps> = ({
  messages,
  setExpMSG,
  setMessages,
}) => {
  const [timer, setTimer] = useState(0)
  const [block, setBlock] = useState(false)

  useEffect(() => {
    let id = setInterval(() => setTimer((prev) => prev + 1), 1000)

    return () => clearInterval(id)
  }, [])

  useDidMountEffect(() => {
    if (block) return

    if (messages.length) {
      let m = messages[0]
      setExpMSG(m)
    }
  }, [timer])

  useDidMountEffect(() => {
    setTimeout(() => setBlock(false), 2000)
  }, [block])

  return (
    <>
      <br />
      timer:{timer}{' '}
    </>
  )
}
