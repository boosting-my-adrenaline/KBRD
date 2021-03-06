import React, { useEffect, useState } from 'react'
import AS from '../../../static/profiles/anakin3.jpeg'

export const PhotoMiniature: React.FC = () => {
  // const user = useTypedSelector((state) => state.auth.user)
  // const users = useTypedSelector((state) => state.auth.users)
  // const isLoggedIn = !!user

  // const getUserInfo = (array: User[], id: number | null) => {
  //   let result: null | User = null
  //   array.forEach((el) => {
  //     if (el.id === id) {
  //       return result === el
  //     }
  //   })
  //   if (!result) return { photo: 'NoNobody' }
  //   return result
  // }

  // const userInfo: User | { photo: string } = getUserInfo(users, user)

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => setAppear(true), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <img
      alt="logo"
      src={AS}
      className={` flex items-center justify-center bg-white object-cover ${
        !appear && `opacity-0`
      } transition duration-100 ease-linear`}
    />
  )
}
