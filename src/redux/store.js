import { configureStore} from '@reduxjs/toolkit'
import productModalSlice from './product-modal/productModalSlice'
import cartItemSlice from './cart-item/cartItemSlice'

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemSlice,
    }
})