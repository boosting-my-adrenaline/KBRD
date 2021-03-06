import React, { useState } from 'react'
import { MainState } from '../../App'
import { PerspectiveController } from '../PerspectiveController'
import { INFOslide } from './INFO.slide'

interface IProps {
  mainState: MainState
}

export const INFOcontainer: React.FC<IProps> = ({ mainState }) => {
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

  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }

  return (
    <div
      style={{
        marginTop: perspective[1],
        marginBottom: perspective[1],
        transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
        transition: '0.05s ease-in-out',
      }}
    >
      <div
        className={`flex flex-col justify-center items-center z-20 transition duration-1000 ease-linear`}
      >
        <INFOslide mainState={mainState} />
      </div>
      <PerspectiveController setInfo={handleSetPerspective} />
    </div>
  )
}
