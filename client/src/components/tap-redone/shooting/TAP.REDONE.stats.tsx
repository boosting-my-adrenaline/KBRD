import React from 'react'
import useLanguage from '../../../hooks/useLanguage'
import { BOOKstatsErrorsWidget } from '../../book-redone/components/stats/B.stats.error.widget'
import { TAPerrors } from './stats/TAP.errors'
import { TAPoverall } from './stats/TAP.overall'

interface IProps {
  succesed: number
  errors: number
  show: boolean
}

export const TAPREDONEstats: React.FC<IProps> = ({
  succesed,
  errors,
  show,
}) => {
  const { isEng } = useLanguage()
  return (
    <div
      className={`w-[1080px] ${
        isEng ? `font-courier` : `font-CourierC`
      } borde  z-50 flex select-none items-center justify-center border-black  transition duration-500 ease-in-out ${
        show || `opacity-0`
      }`}
    >
      <div
        className={`w-f borde-red-800 borde mx-8 flex flex-row items-center justify-between text-xl text-gray-600 ${
          `` // hide && `-z-10`
        }`}
      >
        <div className={`flex items-center justify-center`}>
          <TAPoverall overall={succesed} />
        </div>

        <div className={`mr-24 flex items-center justify-center`}>
          {`\u00a0`}
          <div className={`absolute `}>
            {/* <BOOKstatsAccuracyWidget
              currentAccuracy={accuracy}
              // overall={overall}
              // fti={fti}
              overall={overallLocal}
              errors={errorsLocal}
            /> */}
          </div>
        </div>

        <div className={`flex items-center justify-center`}>
          {`\u00a0`}

          <div className={`absolute `}>
            {/* <BOOKstatsCPMWidget CPM={CPM} avgCPM={avgCPM} /> */}
          </div>
        </div>
        <div className={`flex translate-x-[-60px] items-center justify-center`}>
          <TAPerrors errors={errors} />
        </div>
      </div>
    </div>
  )
}
