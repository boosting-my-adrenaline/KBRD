import React from 'react'
import { MainState } from '../../App'
import { MAINREDONEbook } from './MAIN.REDONE.BOOK'
import { MAINREDONEtap } from './MAIN.REDONE.TAP'
import mainsvg from '../../static/mainsvg.svg'
import { Test } from '../Test'
import { MAINREDONEinfo } from './MAIN.REDONE.INFO'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
  trainingLanguage: boolean
  handleLanguage: () => void
}

export const MAINREDONEcontainer: React.FC<IProps> = ({
  mainState,
  setMainState,
  trainingLanguage,
  handleLanguage,
}) => {
  return (
    <div
      // className={`fixed inset-0 z-50 flex
      //  min-h-[700px]  items-center justify-center  transition duration-200 ease-in-out
      //   `}
      className={` flex min-h-[100vh] w-[100vw] items-center justify-center `}
      style={{
        backgroundImage: `url(${mainsvg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <MAINREDONEinfo mainState={mainState} setMainState={setMainState} />
      <MAINREDONEtap
        mainState={mainState}
        setMainState={setMainState}
        trainingLanguage={trainingLanguage}
        handleLanguage={handleLanguage}
      />
      <MAINREDONEbook
        mainState={mainState}
        setMainState={setMainState}
        trainingLanguage={trainingLanguage}
      />
      {/* <Test /> */}
    </div>
  )
}
