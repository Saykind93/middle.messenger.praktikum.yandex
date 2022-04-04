import { Store} from './Store'
import {expect} from 'chai'

describe('Store', ()=> {
  let store: Store | null
  beforeEach(()=>{
    store = new Store()
  })
  it('should be empty on startup', ()=>{
    expect(store!.getState()).to.be.empty
  })

  it('should set value to store', ()=>{
    store!.set('currentUser', 'value')

    expect(store!.getState()).to.eq({currentUser: "value"})
  })

})
