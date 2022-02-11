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
  setFooter?(fontSize: number, paddingX: number): void
  setBook?(perspective: number, marginTop: number): void
  setTap?(perspective: number, marginTop: number): void
  setInfo?(perspective: number, marginTop: number): void
}

export const PerspectiveController: React.FC<IProps> = ({
  setPerspective = () => {},
  setPerspective2 = () => {},
  setMainMT = () => {},
  setNavPerspective = () => {},
  setIsHorisontal = () => {},
  handleSetParams = () => {},
  setFooter = () => {},
  setBook = () => {},
  setTap = () => {},
  setInfo = () => {},
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
    let H = windowDimensions.height

    handleSetParams(H, W)

    if (W <= 500 && W < H) {
      setIsHorisontal(true)
    } else {
      setIsHorisontal(false)
    }

    if (W > 2160) {
      setPerspective(0, 250, true)
      setBook(0, 150)
      setInfo(0, 250)
      setTap(0, 150)
      setMainMT(300)
      setNavPerspective(0, 65)
      setPerspective2(0, 100, -605)
      setFooter(30, 400)
      if (W >= 3000) {
        setPerspective2(0, 100, -1105)
        setTap(0, 150)
        setNavPerspective(0, 45)
      } else {
        setFooter(25, 300)
        setNavPerspective(0, 45)
      }
    } else if (W <= 2160 && W > 1920) {
      setPerspective(0, 200, true)
      setBook(0, 140)
      setInfo(0, 100)
      setTap(0, 120)

      setPerspective2(0, 100, -605)
      setMainMT(400)
      setNavPerspective(0, 45)
      setFooter(20, 350)
    } else if (W <= 1920 && W > 1700) {
      setPerspective(0, 140, true)
      setBook(0, 140)
      setInfo(0, 70)
      setTap(0, 90)

      setPerspective2(-0, 0, -102)
      setMainMT(300)
      setNavPerspective(0, 32)
      setFooter(18, 300)

      if (W <= 1800) {
        setPerspective(0, 130, true)
        setBook(-50, 130)
        setTap(-100, 50)
        setInfo(0, 100)

        setMainMT(285)
        setNavPerspective(0, 32)
      }
    } else if (W <= 1700 && W > 1500) {
      setPerspective(-130, 85, true)
      setBook(-200, 85)
      setTap(-230, 25)
      setInfo(-130, 60)

      setPerspective2(-50, -25, -102)
      setMainMT(245)
      setNavPerspective(0, 34)

      setFooter(14, 200)
    } else if (W <= 1500 && W > 1350) {
      setPerspective(-400, 20, true)
      setBook(-350, 20)
      setTap(-400, 20)
      setInfo(-100, 20)

      setPerspective2(-100, -50, -102)
      setMainMT(205)
      setNavPerspective(-100, 34)
      setFooter(12, 200)
    } else if (W <= 1350 && W > 1200) {
      setPerspective(-400, 20, true)
      setBook(-440, 20)
      setInfo(-100, 10)
      setTap(-500, -55)
      setPerspective2(-100, -40, -102)
      setMainMT(205)
      setNavPerspective(-100, 32)

      setFooter(10, 200)
    } else if (W <= 1200 && W > 1000) {
      setPerspective(-790, -63, true)
      setBook(-800, 7)
      setInfo(-100, 7)
      setTap(-800, -100)
      setPerspective2(-350, -40, -102)
      setMainMT(200)
      setNavPerspective(-100, 32)

      setFooter(10, 200)
    } else if (W <= 1000) {
      setPerspective(0, 0, false)
      setBook(0, 0)
      setTap(0, 0)
      setPerspective2(0, 0, 0)
      setMainMT(0)
      setFooter(10, 200)
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
