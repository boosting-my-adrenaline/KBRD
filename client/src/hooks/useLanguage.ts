import useLocalStorage from './useLocalStorage'

interface UseDarkModeOutput {
  isEng: boolean
  toggle: () => void
  enable: () => void
  disable: () => void
}

function useLanguage(defaultValue?: boolean): UseDarkModeOutput {
  const [isEng, setIsEng] = useLocalStorage<boolean>('language', true)

  return {
    isEng,
    toggle: () => setIsEng((prev) => !prev),
    enable: () => setIsEng(true),
    disable: () => setIsEng(false),
  }
}

export default useLanguage
