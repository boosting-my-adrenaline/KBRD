import React, { useEffect, useState } from 'react'

interface IProps {
  setPerspective?(perspective: number, margin: number): void
  setPerspective2?(
    perspective: number,
    marginTop: number,
    marginLeft: number
  ): void
  setMainMT?(marginTop: number): void
}

export const PerspectiveController: React.FC<IProps> = ({
  setPerspective = () => {},
  setPerspective2 = () => {},
  setMainMT = () => {},
}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  function getWindowDimensions(): { width: number; height: number } {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const handleMission = () => {
    let W = windowDimensions.width

    if (W > 2160) {
      setPerspective(0, 250)
      setMainMT(300)
    } else if (W <= 2160 && W > 1920) {
      setPerspective(0, 200)
      setPerspective2(0, 100, -445)
      setMainMT(200)
    } else if (W <= 1920 && W > 1700) {
      setPerspective(0, 150)
      setPerspective2(-0, 0, 47)
      setMainMT(200)
      if (W === 1800) {
        setMainMT(155)
      }
    } else if (W <= 1700 && W > 1500) {
      setPerspective(-90, 90)
      setMainMT(165)
    } else if (W <= 1500 && W > 1350) {
      setPerspective(-170, 60)
      setPerspective2(-100, -50, 47)
      setMainMT(155)
    } else if (W <= 1350 && W > 1200) {
      setPerspective(-400, -40)
      setPerspective2(-200, -100, 47)
      setMainMT(245)
    } else if (W <= 1200 && W > 1000) {
      setPerspective(-690, -70)
      setPerspective2(-350, -200, 47)
      setMainMT(245)
    } else if (W <= 1000) {
      setPerspective(0, 0)
      setPerspective2(0, 0, 0)
      setMainMT(0)
    }
  }

  useEffect(() => {
    handleMission()
  }, [windowDimensions])

  function handleResize() {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <></>
}
