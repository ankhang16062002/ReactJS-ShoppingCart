import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

const productModalSlice = createSlice({
    name : 'modal-product',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
        remove: (state) => {
            state.value = null
        }
    }
})

const {actions, reducer} = productModalSlice
export const {set, remove} = actions
export default reducer