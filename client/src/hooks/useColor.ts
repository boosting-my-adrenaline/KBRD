import { colorThemes } from './colorThemes'
import useLocalStorage from './useLocalStorage'

export type MainColor =
  | `slate`
  | `red`
  | `orange`
  | `amber`
  | `yellow`
  | `lime`
  | `green`
  | `emerald`
  | `teal`
  | `cyan`
  | `sky`
  | `blue`
  | `indigo`
  | `violet`
  | `purple`
  | `fuchsia`
  | `pink`
  | `rose`

export type Tonality = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

interface ColorElement {
  t50: string
  t100: string
  t200: string
  t300: string
  t400: string
  t500: string
  t600: string
  t700: string
  t800: string
  t900: string
}

interface ColorBG {
  t50: string
  t100: string
  t200: string
  t300: string
  t400: string
  t500: string
  t600: string
  t700: string
  t800: string
  t900: string
  t90030: string
}

export interface ThemeColor {
  border: ColorElement
  bg: ColorBG
  text: ColorElement
  shadow: ColorElement
  fill: ColorElement
  stroke: ColorElement
}

interface useColorOutput {
  mainColor1: MainColor
  setMainColor1: (mainColor: MainColor) => void
  themeColor1: ThemeColor
  mainColor2: MainColor
  setMainColor2: (mainColor2: MainColor) => void
  themeColor2: ThemeColor
}

function useColor(defaultValue?: boolean): useColorOutput {
  const [mainColor1, setMainColor1] = useLocalStorage<MainColor>(
    'mainColor1',
    `slate`
  )
  const [mainColor2, setMainColor2] = useLocalStorage<MainColor>(
    'mainColor2',
    `purple`
  )

  return {
    mainColor1,
    themeColor1: colorThemes(mainColor1),
    setMainColor1,
    mainColor2,
    themeColor2: colorThemes(mainColor2),
    setMainColor2,
  }
}

export default useColor

export const colorElements: [MainColor, string, string, string, string][] = [
  [
    `slate`,
    `bg-slate-400`,
    'border-slate-700',
    `bg-slate-400`,
    'border-slate-700',
  ],
  [`red`, `bg-red-400`, 'border-red-700', `bg-red-400`, 'border-red-700'],
  [
    `orange`,
    `bg-orange-400`,
    'border-orange-700',
    `bg-orange-400`,
    'border-orange-700',
  ],
  [
    `amber`,
    `bg-amber-400`,
    'border-amber-700',
    `bg-amber-400`,
    'border-amber-700',
  ],
  [
    `yellow`,
    `bg-yellow-400`,
    'border-yellow-700',
    `bg-yellow-400`,
    'border-yellow-700',
  ],
  [`lime`, `bg-lime-400`, 'border-lime-700', `bg-lime-400`, 'border-lime-700'],
  [
    `green`,
    `bg-green-400`,
    'border-green-700',
    `bg-green-400`,
    'border-green-700',
  ],
  [
    `emerald`,
    `bg-emerald-400`,
    'border-emerald-700',
    `bg-emerald-400`,
    'border-emerald-700',
  ],
  [`teal`, `bg-teal-400`, 'border-teal-700', `bg-teal-400`, 'border-teal-700'],
  [`cyan`, `bg-cyan-400`, 'border-cyan-700', `bg-cyan-400`, 'border-cyan-700'],
  [`sky`, `bg-sky-400`, 'border-sky-700', `bg-sky-400`, 'border-sky-700'],
  [`blue`, `bg-blue-400`, 'border-blue-700', `bg-blue-400`, 'border-blue-700'],
  [
    `indigo`,
    `bg-indigo-400`,
    'border-indigo-700',
    `bg-indigo-400`,
    'border-indigo-700',
  ],
  [
    `violet`,
    `bg-violet-700`,
    'border-violet-200',
    `bg-violet-400`,
    'border-violet-700',
  ],
  [
    `purple`,
    `bg-purple-400`,
    'border-purple-700',
    `bg-purple-400`,
    'border-purple-700',
  ],
  [
    `fuchsia`,
    `bg-fuchsia-400`,
    'border-fuchsia-700',
    `bg-fuchsia-400`,
    'border-fuchsia-700',
  ],
  [`pink`, `bg-pink-400`, 'border-pink-700', `bg-pink-400`, 'border-pink-700'],
  [`rose`, `bg-rose-400`, 'border-rose-700', `bg-rose-400`, 'border-rose-700'],
]
