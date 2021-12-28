import React, { useState, useEffect } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { LEVELmessenger } from './LEVEL.messenger'

interface IProps {
  handleSetExp(value: number): void
  overall: number
  fti: number[]
  avgCPM: number
  CPM: number
  accuracy: number
  setExpMSG(MSG: string | null): void
}
export const LEVELupper: React.FC<IProps> = ({
  handleSetExp,
  overall,
  fti,
  avgCPM,
  CPM,
  accuracy,
  setExpMSG,
}) => {
  const successRow = fti.length > 0 ? fti[fti.length - 1] - 1 : overall

  const [messages, setMessages] = useState<string[]>([])

  const [block, setBlock] = useState(false)

  useDidMountEffect(() => {
    if (block) return

    if (messages.length) {
      let m = messages[0]

      setExpMSG(m)
      setMessages((prev) => {
        prev.shift()
        return prev
      })
      setBlock(true)
    } else {
      setExpMSG(null)
    }
  }, [block, messages])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setBlock(false)
    }, 2000)

    return () => clearTimeout(id)
  }, [block])

  //////////

  const handleMessage = (msg: string) => {
    setMessages((prev) => [...prev, msg])
  }

  let exp = handleSetExp
  let m = handleMessage
  let aap = ((overall - fti.length) / overall) * 100

  useDidMountEffect(() => {
    /////        in a row

    if (successRow % 40 === 0 && successRow) {
      exp((successRow / 10) * 1.25)
      m(`row:+${(successRow / 10) * 1.25}`)
    }
  }, [overall])

  useDidMountEffect(() => {
    /////        in a row + cpm

    if (successRow % 50 === 0 && successRow) {
      if (avgCPM >= 250) {
        exp((successRow / 10) * 5)
        m(`per&fast:+${(successRow / 10) * 5}`)
      } else if (avgCPM < 250 && avgCPM >= 215) {
        exp((successRow / 10) * 3)
        m(`per&fast:+${(successRow / 10) * 3}`)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    ////overall

    if (overall <= 500 && overall % 87 === 0) {
      exp((overall / 87) * 10)
      m(`ov:${(overall / 87) * 10}`)
    } else if (overall >= 500 && overall <= 1000 && overall % 100 === 0) {
      exp((overall / 100) * 10)
      m(`ov:${(overall / 100) * 10}`)
    } else if (overall > 1000 && overall % 100 === 0) {
      exp((overall / 100) * 5 + 50)
      m(`ov:${(overall / 100) * 5 + 50}`)
    }
  }, [overall])

  useDidMountEffect(() => {
    /////// average CPM

    if (overall > 100 && overall % 82 === 0) {
      if (avgCPM >= 300) {
        exp(30 + overall / 8.2)
        m(`avgCPM:${30 + overall / 8.2}`)
      } else if (avgCPM < 300 && avgCPM >= 250) {
        exp(30 + overall / 8.2)
        m(`avgCPM:${20 + overall / 8.2}`)
      } else if (avgCPM < 250 && avgCPM >= 225) {
        exp(30 + overall / 8.2)
        m(`avgCPM:${10 + overall / 8.2}`)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    /////// average accuracy percent

    if (overall >= 250 && overall % 125 === 0) {
      if (aap >= 98.75) {
        exp(40 + (overall / 125) * 10)
        m(`avgAcc:${40 + (overall / 125) * 10}`)
      } else if (aap < 98.75 && aap >= 97.25) {
        exp(25 + (overall / 125) * 5)
        m(`avgAcc:${25 + (overall / 125) * 5}`)
      } else if (aap < 97.25 && aap >= 96.25) {
        exp(15 + (overall / 125) * 5)
        m(`avgAcc:${15 + (overall / 125) * 5}`)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    /////////////////  accuracy && cpm
    if (overall >= 150 && overall % 50 === 0) {
      if (aap > 97.5 && avgCPM >= 250) {
        exp(50)
        m(`f&&a:${50}`)
      }
    }
  }, [overall])

  return (
    <div className={`invisible flex gap-10 select-none`}>
      <div onMouseDown={() => handleMessage('first')}>+first</div>
      <div onMouseDown={() => handleMessage('second')}>+second</div>
      <div onMouseDown={() => handleMessage('third')}>+third</div>
      <div onMouseDown={() => console.log(messages)}>console</div>
      <br />
      block: {block ? 1 : 0}
      {/* <LEVELmessenger
        messages={messages}
        setExpMSG={setExpMSG}
        setMessages={setMessages}
      /> */}
    </div>
  )
}
