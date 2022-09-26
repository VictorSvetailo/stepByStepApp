import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';


test('reduce should change value to opposite value',() => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //exception


    expect(newState.collapsed).toBe(true)
})

test('reduce should alue to opposite value',() => {
    // data
    const state: StateType = {
        collapsed: true
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //exception
    expect(newState.collapsed).toBe(false)
})


test('reduce should throw error because action type is incorrect',() => {
    // data
    const state: StateType = {
        collapsed: true
    }
    // action
    expect( () => {
        reducer(state, {type: 'Fake'})
    }).toThrowError()
    //exception
})
