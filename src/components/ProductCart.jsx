import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import {Link} from 'react-router-dom'
import numberWithCommat from '../utils/numberWithCommat'

import {useDispatch} from 'react-redux'
import {set} from '../redux/product-modal/productModalSlice'

const ProductCart = (props) => {
    const product = props.product

    const dispatch = useDispatch();

    return (
        <div className = 'product-cart'>
            <div className="product-cart__img">
                <Link to = {`/${product.slug}`}>
                    <img src= {product.image01} alt="img01" className="product-cart__img__first" />
                    <img src= {product.image02} alt="img02" className="product-cart__img__second" />
                </Link>
            </div>
            <div className="product-cart__info">
                <Link to = {`/${product.slug}`}>
                    <p className="product-cart__info__name">{product.title}</p>
                    <div className="product-cart__info__price">
                        <span className = 'product-cart__info__price__new'>{numberWithCommat(product.price)}</span>
                        <span className = 'product-cart__info__price__old'><del>{numberWithCommat(399000)}</del></span>
                    </div>
                </Link>
                <Button
                    animate 
                    icon = 'bx bx-cart'
                    backgroundColor = {product.color}
                    size = 'sm'
                    onClick = {() => dispatch(set(product.slug))}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

export default ProductCart

ProductCart.propTypes = {
    product: PropTypes.object.isRequired,
}
