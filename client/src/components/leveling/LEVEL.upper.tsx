import React, { useState, useEffect } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { ExpMessage, ExpMSG } from './LEVEL.container'
import { LEVELmessenger } from './LEVEL.messenger'

interface IProps {
  handleSetExp(value: number): void
  overall: number
  fti: number[]
  avgCPM: number
  CPM: number
  accuracy: number
  setExpMSG(MSG: ExpMSG): void
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
    }, 4000)

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
    let sr = successRow

    if (sr % 40 === 0 && successRow) {
      exp((sr / 10) * 1.25)
      if (sr === 40) {
        m(ExpMessage.Marksman)
      } else if (sr === 80) {
        m(ExpMessage.TheBullsEye)
      } else {
        m(ExpMessage.AccurateAsStephCurry)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    /////        in a row + cpm

    if (successRow % 50 === 0 && successRow) {
      if (avgCPM >= 250) {
        exp((successRow / 10) * 5)
        m(ExpMessage.FastAndPerfectRace)
      } else if (avgCPM < 250 && avgCPM >= 215) {
        exp((successRow / 10) * 3)
        m(ExpMessage.FastRun)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    ////overall

    if (overall <= 500 && overall % 87 === 0) {
      exp((overall / 87) * 10)
      m(ExpMessage.Practice)
    } else if (overall >= 500 && overall <= 1000 && overall % 100 === 0) {
      exp((overall / 100) * 10)
      m(ExpMessage.TaskAheadOfYou)
    } else if (overall > 1000 && overall <= 2500 && overall % 100 === 0) {
      exp((overall / 100) * 5 + 50)
      m(ExpMessage.HardWorker)
    } else if (overall > 2500 && overall % 100 === 0) {
      exp((overall / 100) * 5 + 50)
      m(ExpMessage.MaraphonRunner)
    }
  }, [overall])

  useDidMountEffect(() => {
    /////// average CPM

    if (overall > 100 && overall % 82 === 0) {
      if (avgCPM >= 300) {
        exp(30 + overall / 8.2)
        m(ExpMessage.WayTooFast)
      } else if (avgCPM < 300 && avgCPM >= 250) {
        exp(30 + overall / 8.2)
        m(ExpMessage.FastAndFurious)
      } else if (avgCPM < 250 && avgCPM >= 225) {
        exp(30 + overall / 8.2)
        m(ExpMessage.FastFingers)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    /////// average accuracy percent

    if (overall >= 250 && overall % 125 === 0) {
      if (aap >= 98.75) {
        exp(40 + (overall / 125) * 10)
        m(ExpMessage.TopSkills)
      } else if (aap < 98.75 && aap >= 97.25) {
        exp(25 + (overall / 125) * 5)
        m(ExpMessage.Excellence)
      } else if (aap < 97.25 && aap >= 96.25) {
        exp(15 + (overall / 125) * 5)
        m(ExpMessage.NotAverage)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    /////////////////  accuracy && cpm
    if (overall >= 150 && overall % 50 === 0) {
      if (aap > 97.5 && avgCPM >= 250) {
        exp(50)
        m(ExpMessage.AbsoluteMaster)
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
