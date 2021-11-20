import React from 'react'
import { Chapters } from '../../types/nav'
import { FadeText } from '../../utils/FadeText'
import { FadeText2 } from '../../utils/FadeText2'

interface IProps {
  chapter: Chapters
}

export const INFOslide: React.FC<IProps> = ({ chapter }) => {
  const loremus = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
  earum. Hic at quo eveniet soluta fugiat explicabo, inventore quia, vel
  ipsum dolorem eaque omnis itaque pariatur nostrum cumque, qui commodi.
  Fugit exercitationem laborum minus vero quibusdam illum perferendis
  corporis libero quas pariatur quo assumenda, tenetur necessitatibus, hic,
  rem doloribus. Molestiae veritatis praesentium eius in facilis deleniti
  quia iste magni tempore? Illum omnis suscipit vitae aspernatur cum dicta
  fugit perferendis minus, sed nihil numquam asperiores cupiditate ipsum
  praesentium eum? Nam, quibusdam iure magnam maiores quod numquam nostrum
  illum quisquam at quia. Ea magnam, aliquam sunt eaque nulla a id, magni
  tempore eveniet voluptas voluptates temporibus, odit quidem sequi tempora
  nemo delectus deserunt perspiciatis. Aliquam blanditiis nisi, error
  officiis saepe optio veniam. Quia earum nam, eveniet beatae ad dicta.
  Magnam corrupti sunt sit dolor? Illo, nulla quaerat architecto laboriosam
  non repellat? Accusantium cum praesentium mollitia natus facilis inventore
  est adipisci similique amet.`

  return (
    <div
      className={`w-1000 2k:w-1500 3k:w-2000 flex flex-col  gap-x-4 mx-9 z-10 text-2xl font-courier mt-20`}
    >
      <FadeText2
        title={`Lorem ipsum dolor sit amet.`}
        hide={chapter}
        delay={200}
        component="h1"
      />

      <FadeText2
        title={loremus}
        // delay={[300, 500]}
        hide={chapter}
        delay={225}
        component="h3"
        // multiple={true}
      />
    </div>
  )
}