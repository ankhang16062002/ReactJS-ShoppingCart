import React from 'react'

import ProductView from './ProductView'
import productMethods from '../assets/fake-data/products'
import Button from './Button'
import {useSelector, useDispatch} from 'react-redux'
import {remove} from '../redux/product-modal/productModalSlice'

const ProductModal = () => {

    const dispatch = useDispatch()
    const slug = useSelector((item) => item.productModal.value)
    const product = productMethods.getProductBySlug(slug)[0]

    return (
        <div className = {`product-modal ${product ? 'active' : ''}`}>
            <div className="product-modal__content">
                <ProductView product = {product}/>
                <div className="product-modal__content__close">
                    <Button 
                        size = 'sm'
                        onClick = {() => dispatch(remove())}
                    >
                        đóng
                    </Button>
                </div>
            </div>     
        </div>
    )
}

export default ProductModal
