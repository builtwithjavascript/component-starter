import { useComponentStarter } from '@/components'

describe('useComponentStarter', () => {
  it(`should return a defined instance`, () => {
    const id = 'component-id'
    const options = {}
    const instance = useComponentStarter(id, options)
    expect(instance).toBeDefined()
  })
})
