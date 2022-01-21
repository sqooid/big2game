import { randomString } from '@/server/utils'
import { expect } from 'chai'

describe('randomString', () => {
  it('has right length', () => {
    const length = 16
    const str = randomString(length)
    expect(str).to.have.lengthOf(length)
  })
})
