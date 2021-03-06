import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { ExpMessage, ExpMSG } from './LEVEL.container'

interface IProps {
  handleSetExp(value: number): void
  overall: number
  fti: number[]
  avgCPM: number
  setExpMSG(MSG: ExpMSG): void
  errors: number
  overallLocal: number
}
export const LEVELupper: React.FC<IProps> = ({
  handleSetExp,
  overall,
  fti,
  avgCPM,
  setExpMSG,
  errors,
  overallLocal,
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
  let aap = ((overallLocal - errors) / overallLocal) * 100

  useDidMountEffect(() => {
    let o = overallLocal

    if (o <= 500 && o % 87 === 0) {
      exp((o / 87) * 10)
      m(ExpMessage.Practice)
    } else if (o >= 500 && o <= 1000 && o % 100 === 0) {
      exp((o / 100) * 10)
      m(ExpMessage.TaskAheadOfYou)
    } else if (o > 1000 && o <= 2500 && o % 100 === 0) {
      exp((o / 100) * 5 + 50)
      m(ExpMessage.HardWorker)
    } else if (o > 2500 && o % 100 === 0) {
      exp((o / 100) * 5 + 50)
      m(ExpMessage.MaraphonRunner)
    }
  }, [overall])

  useDidMountEffect(() => {
    /////        in a row
    let sr = successRow

    if (sr % 55 === 0 && successRow) {
      exp(((sr / 10) * 50) / 55)
      if (sr === 55) {
        m(ExpMessage.Marksman)
      } else if (sr === 110) {
        m(ExpMessage.TheBullsEye)
      } else if (sr >= 165) {
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
    let o = overallLocal

    if (o >= 250 && o % 125 === 0) {
      if (aap >= 98.75) {
        exp(40 + (o / 125) * 10)
        m(ExpMessage.TopSkills)
      } else if (aap < 98.75 && aap >= 97.25) {
        exp(25 + (o / 125) * 5)
        m(ExpMessage.Excellence)
      } else if (aap < 97.25 && aap >= 96.25) {
        exp(15 + (o / 125) * 5)
        m(ExpMessage.NotAverage)
      }
    }
  }, [overall])

  useDidMountEffect(() => {
    /////////////////  accuracy && cpm
    if (overall >= 150 && overall % 50 === 0) {
      if (aap > 97.25 && aap < 98.5 && avgCPM >= 250 && avgCPM < 275) {
        exp(30)
        m(ExpMessage.Pianist)
      } else if (aap >= 98.5 && avgCPM >= 275) {
        exp(50)
        m(ExpMessage.AbsoluteMaster)
      }
    }
  }, [overall])

  return (
    <div className={`invisible flex select-none gap-10`}>
      {/* <div onMouseDown={() => handleMessage('first')}>+first</div>
      <div onMouseDown={() => handleMessage('second')}>+second</div>
      <div onMouseDown={() => handleMessage('third')}>+third</div>
      <div onMouseDown={() => console.log(messages)}>console</div>
      <br />
      block: {block ? 1 : 0} */}
      {/* <LEVELmessenger
        messages={messages}
        setExpMSG={setExpMSG}
        setMessages={setMessages}
      /> */}
    </div>
  )
}
