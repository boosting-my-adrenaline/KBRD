export const shuffleArray = (arr: string[]): string[] => {
  let a: number[] = Array.from({ length: arr.length }, (_, i) => i)
  let res: string[] = []
  for (let i = 0; i < arr.length; i++) {
    let r = Math.floor(Math.random() * (arr.length - i))
    res.push(arr[a[r]])
    a = a.filter((el) => el !== a[r])
  }
  return res
}
