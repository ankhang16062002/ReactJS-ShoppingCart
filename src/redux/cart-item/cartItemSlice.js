import {createSlice} from '@reduxjs/toolkit'

const items = localStorage.getItem('cart__items') ? JSON.parse(localStorage.getItem('cart__items')) : []

const initialState = {
    value : items,
}

const cartItemSlice = createSlice({
    name: 'cart__items',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const duplicate = findItem(state.value, action.payload)

            if(duplicate.length > 0) {
                state.value = delItem(state.value, action.payload)
                state.value = [
                    ...state.value,
                    {
                        ...action.payload,
                        id: duplicate[0].id,
                        quantity: duplicate[0].quantity + action.payload.quantity,
                    }
                ]
            } else {
                state.value = [
                    ...state.value,
                    {
                        ...action.payload,
                        id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                    }
                ]
            }
            localStorage.setItem('cart__items', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id) ? -1 : 0 )))
        },
        updateProduct: (state, action) => {
            const productUpdate = findItem(state.value, action.payload)

            if(productUpdate.length > 0) {
                state.value = delItem(state.value, action.payload)

                state.value = [
                    ...state.value,
                    {
                        ...productUpdate[0],
                        quantity: action.payload.quantity
                    }
                ]
            }
            console.log(state.value)
            localStorage.setItem('cart__items', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id) ? -1 : 0 )))
        },
        removeProduct: (state, action) => {
            state.value = delItem(state.value, action.payload)
            localStorage.setItem('cart__items', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id) ? -1 : 0 )))
        },
    }
})

const findItem = (arr, item) => arr.filter((e) => e.slug === item.slug && e.color === item.color && e.size === item.size)
const delItem = (arr, item) => arr.filter((e) => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)

const {actions, reducer} = cartItemSlice
export const {addItems, updateProduct, removeProduct} = actions
export default reducer