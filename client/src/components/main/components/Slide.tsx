import React, { useState, useEffect } from 'react'
import { useNavAction } from '../../../hooks/useAction'
import { Chapters } from '../../../types/nav'
import { FadeText } from '../../../utils/FadeText'
import { getRandom } from '../../../utils/getRandom'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  chapter: Chapters
  title: Chapters
  queue: number
}

export const Slide: React.FC<IProps> = ({ chapter, title, queue }) => {
  const { changeChapter } = useNavAction()

  const [unique, setUnique] = useState(false)
  const [params, setParams] = useState([1500, 0, 500])

  const [posX, posY, width] = params
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setParams(() => [0, 0, 500, 1])
    }, queue * 200 + 200)
    // setAngle(getRandom(0, 6) - 3)
  }, [])

  useDidMountEffect(() => {
    if (!unique) {
      setTimeout(() => {
        setParams(() => [-1500, 0, 500])
      }, queue * 200)
    }
  }, [chapter])

  useDidMountEffect(() => {
    setParams(() => [50, 0, 500])
    // setAngle((prev) => prev * -1)
    setAngle(getRandom(0, 12) - 6)

    setTimeout(() => setParams(() => [0, -800, 1000]), 400)
  }, [unique])

  const getColor = (chapter: Chapters): string => {
    switch (chapter) {
      case 'BOOK':
        return 'red'
      case 'TAP':
        return 'blue'
      case 'INFO':
        return 'yellow'
      default:
        return ''
    }
  }

  const definedColor = getColor(title)

  return (
    <div
      className={`flex items-center justify-center font-courier cursor-pointer uppercase rounded-2xl bg-${definedColor}-${
        unique ? 300 : 200
      } border-${unique ? 8 : 2} border-${definedColor}-${unique ? 500 : 400}`}
      style={{
        width: width,
        height: 100,
        fontSize: '3em',
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
        transform: `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`,
        transition: '0.5s ease',
      }}
      onClick={() => {
        setUnique(true)
        changeChapter(title)
      }}
    >
      <FadeText title={title} delay={[600, 1200]} hide={chapter} />
    </div>
  )
}
