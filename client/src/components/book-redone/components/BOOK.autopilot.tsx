import React, { useEffect, useState } from 'react'

interface IProps {
  mode: 0 | 1 | 2
  SUCCESS: () => void
  FAILURE: () => void
  handleTest: () => void
}

export const BOOKautopilot: React.FC<IProps> = ({
  mode,
  FAILURE,
  SUCCESS,
  handleTest,
}) => {
  const [refresh, setRefresh] = useState(0)
  useEffect(() => {
    let delays = [
      [1000000, 100000],
      [700, 500],
      [450, 300],
    ]

    let id = setInterval(() => {
      if (Math.random() > 0.2) {
        handleTest()
      } else {
        handleTest()
        setRefresh((prev) => prev + 1)
      }
    }, Math.floor(Math.random() * delays[mode][1]) + delays[mode][2])

    return () => clearInterval(id)
  }, [mode])

  return <></>
}
