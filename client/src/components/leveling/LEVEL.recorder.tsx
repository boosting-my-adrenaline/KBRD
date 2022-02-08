// import React, { useEffect } from 'react'
// import { useDidMountEffect } from '../../utils/useDidMountEffect'

interface IProps {
  level: number
  exp: number
  handleExp: (value: number) => void
}

export const LEVELrecorder: React.FC<IProps> = ({ level, exp, handleExp }) => {
  // useEffect(() => {
  //   if (loggedInUser) {
  //     setLevel(loggedInUser.book.level)
  //     setTimeout(() => handleExp(loggedInUser.book.exp), 1000)
  //   }
  // }, [loggedInUser])

  // useDidMountEffect(() => {
  //   if (loggedInUser) {
  //     changeLvl(level)
  //   }
  // }, [level])

  // useDidMountEffect(() => {
  //   if (loggedInUser) {
  //     changeExp(exp[0])
  //   }
  // }, [exp])

  return <>{/* <div onMouseDown={() => handleExp(500)}>TEST</div> */}</>
}
