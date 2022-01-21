export function randomString(length: number): string {
  const alpha = 'qwertyuiopasdfghjklzxcvbnm'
  const alphaCap = alpha.toUpperCase()
  const num = '1234567890'
  const alphanum = alpha + alphaCap + num
  const res = []
  for (let i = 0; i < length; ++i) {
    res.push(randomIn(alphanum))
  }
  return res.join('')
}

export function randomIn(array: any[] | string): any | string {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
