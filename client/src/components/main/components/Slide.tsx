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
  const [params, setParams] = useState([2000, 0, 500])

  const [posX, posY, width] = params
  const [angle, setAngle] = useState(0)

  const [hover, setHover] = useState(false)

  useDidMountEffect(() => {
    if (hover) {
      setParams((prev) => {
        let arr = prev
        arr[1] = arr[1] - 10
        return arr
      })
    } else {
      setParams((prev) => {
        let arr = prev
        arr[1] = arr[1] + 10
        return arr
      })
    }
  }, [hover])

  useEffect(() => {
    let id = setTimeout(() => {
      setParams(() => [0, 0, 500, 1])
    }, queue * 200 + 200)

    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {}, 0)

    if (!unique) {
      id = setTimeout(() => {
        setParams(() => [-2000, 0, 500])
      }, queue * 200)
    }

    return () => clearTimeout(id)
  }, [chapter])

  useDidMountEffect(() => {
    setParams(() => [50, 0, 500])
    // setAngle((prev) => prev * -1)
    setAngle(getRandom(0, 12) - 6)

    let id = setTimeout(() => setParams(() => [0, -1000, 1000]), 600)
    return () => clearTimeout(id)
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
      } border-${unique ? 0 : 2} border-${definedColor}-${unique ? 500 : 400}`}
      style={{
        width: width,
        height: 100,
        fontSize: '3em',
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
        transform: `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`,
        transition: '0.5s ease',
      }}
      onMouseDown={() => {
        setUnique(true)
        changeChapter(title)
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FadeText title={title} delay={[600, 1200]} hide={chapter} />
    </div>
  )
}