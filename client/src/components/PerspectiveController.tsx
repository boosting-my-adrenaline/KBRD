import React, { useEffect, useState } from 'react'

interface IProps {
  setPerspective?(
    perspective: number,
    margin: number,
    is1000plus: boolean
  ): void
  setPerspective2?(
    perspective: number,
    marginTop: number,
    marginLeft: number
  ): void
  setMainMT?(marginTop: number): void
  setNavPerspective?(perspective: number, height: number): void
  setIsHorisontal?(isH: boolean): void
  handleSetParams?(height: number, width: number): void
}

export const PerspectiveController: React.FC<IProps> = ({
  setPerspective = () => {},
  setPerspective2 = () => {},
  setMainMT = () => {},
  setNavPerspective = () => {},
  setIsHorisontal = () => {},
  handleSetParams = () => {},
}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  const [refresher, setRefresher] = useState(0)

  // useEffect(() => {
  //   setTimeout(() => setRefresher((prev) => prev + 1), 50)
  // }, [])

  function getWindowDimensions(): { width: number; height: number } {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const handleMission = () => {
    let W = windowDimensions.width
    let H = windowDimensions.height

    handleSetParams(H, W)

    if (W <= 500 && W < H) {
      setIsHorisontal(true)
    } else {
      setIsHorisontal(false)
    }

    if (W > 2160) {
      setPerspective(0, 250, true)
      setMainMT(300)
      setNavPerspective(0, 65)
      setPerspective2(0, 100, -605)
      if (W >= 3000) {
        setPerspective2(0, 100, -1105)
      }
    } else if (W <= 2160 && W > 1920) {
      setPerspective(0, 200, true)
      setPerspective2(0, 100, -605)
      setMainMT(400)
      setNavPerspective(0, 65)
    } else if (W <= 1920 && W > 1700) {
      setPerspective(0, 140, true)
      setPerspective2(-0, 0, -102)
      setMainMT(300)
      setNavPerspective(0, 65)
      if (W <= 1800) {
        setPerspective(0, 130, true)

        setMainMT(285)
        setNavPerspective(-100, 55)
      }
    } else if (W <= 1700 && W > 1500) {
      setPerspective(-130, 85, true)
      setPerspective2(-50, -25, -102)
      setMainMT(245)
      setNavPerspective(-100, 55)
    } else if (W <= 1500 && W > 1350) {
      setPerspective(-400, 20, true)
      setPerspective2(-100, -50, -102)
      setMainMT(205)
      setNavPerspective(-150, 50)
    } else if (W <= 1350 && W > 1200) {
      setPerspective(-400, 20, true)
      setPerspective2(-100, -70, -102)
      setMainMT(205)
      setNavPerspective(-350, 45)
    } else if (W <= 1200 && W > 1000) {
      setPerspective(-690, -20, true)
      setPerspective2(-350, -200, -102)
      setMainMT(200)
      setNavPerspective(-350, 45)
    } else if (W <= 1000) {
      setPerspective(0, 0, false)
      setPerspective2(0, 0, 0)
      setMainMT(0)
    } else {
    }
  }

  useEffect(() => {
    setTimeout(() => handleMission())
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
