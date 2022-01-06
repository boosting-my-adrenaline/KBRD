import React, { useEffect } from 'react'
import { useAuthAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

interface IProps {
  level: number
  setLevel(level: number): void
  exp: [number, number]
  handleExp: (value: number) => void
}

export const LEVELrecorder: React.FC<IProps> = ({
  level,
  setLevel,
  exp,
  handleExp,
}) => {
  const loggedInUser = useTypedSelector((state) => state.auth.user)

  const { changeExp, changeLvl } = useAuthAction()

  useEffect(() => {
    if (loggedInUser) {
      setLevel(loggedInUser.book.level)
      setTimeout(() => handleExp(loggedInUser.book.exp), 1000)
    }
  }, [loggedInUser])

  useDidMountEffect(() => {
    if (loggedInUser) {
      changeLvl(level)
    }
  }, [level])

  useDidMountEffect(() => {
    if (loggedInUser) {
      changeExp(exp[0])
    }
  }, [exp])

  return <>{/* <div onMouseDown={() => handleExp(500)}>TEST</div> */}</>
}
