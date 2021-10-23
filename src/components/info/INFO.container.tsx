import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { FadeText } from '../../utils/FadeText'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

export const INFOcontainer: React.FC = () => {
  const [appear, setAppear] = useState(false)
  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 250)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    setTimeout(() => {
      setAppear(false)
    }, 50)
  }, [chapter])

  const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed
  ratione voluptates repudiandae reprehenderit adipisci impedit qui nihil,
  eum ea aperiam, fugit delectus voluptatum accusantium facere porro beatae,
  consequuntur perspiciatis? Quisquam esse fugiat deleniti illum facilis
  vitae vero eos, est nam accusantium rem error laboriosam architecto
  aspernatur? Totam laborum, pariatur soluta asperiores voluptatum placeat
  minus commodi temporibus quae magnam inventore! Corporis vitae ipsa modi
  excepturi vero impedit doloremque ratione voluptatibus culpa dignissimos
  officia labore veniam nihil repellat, quo ex. Officiis distinctio eius
  voluptatem animi repellendus vero earum debitis vitae modi. Iure, sed quam
  debitis atque saepe soluta neque quia voluptates voluptas doloribus ex et
  quidem ratione dicta eaque blanditiis dolore alias non aut deleniti
  adipisci aspernatur nemo? Modi, illo similique! Maiores id adipisci
  reiciendis incidunt a sed, error autem, cupiditate necessitatibus quo at
  accusantium neque dolorum.`

  return (
    <div
      className="flex flex-col "
      style={{
        transition: '1s ease',
        opacity: !appear ? '0' : '1',
      }}
    >
      <FadeText title={lorem} delay={[500, 1200]} hide={chapter} />
    </div>
  )
}