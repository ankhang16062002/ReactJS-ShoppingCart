import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import numberWithCommat from '../utils/numberWithCommat'
import { useDispatch } from 'react-redux'
import {updateProduct, removeProduct} from '../redux/cart-item/cartItemSlice'

const CartItem = (props) => {
    const item = props.item
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(item.quantity)

    const updateQuantity = (type) => {
        switch(type) {
            case 'minus':
                setQuantity(quantity === 1 ? quantity : quantity - 1)
                dispatch(updateProduct({
                    color : item.color,
                    size: item.size,
                    slug: item.slug,
                    quantity: quantity === 1 ? quantity : quantity - 1,
                }))
                break;
            case 'plus':
                setQuantity(quantity + 1)
                dispatch(updateProduct({
                    color : item.color,
                    size: item.size,
                    slug: item.slug,
                    quantity: quantity + 1,
                }))
                break;
            default:
                break;
        }
    }

    const deleteProduct = () => {
        dispatch(removeProduct({
            color: item.color,
            size: item.size,
            slug: item.slug
        }
        ))
    }

    useEffect(() => {
        setQuantity(item.quantity)
    }, [item.quantity])

    return (
        <div className = 'cart__products__item'>
            <div className="cart__products__item__info">
                <div className="cart__products__item__info__img">
                    <img src= {item.product[0].image01} alt="" />
                </div>
            </div>
            <div className="cart__products__item__update">
                <span className="cart__products__item__update__name">
                    {`${item.product[0].title} - ${item.color} - ${item.size}`} 
                </span>
                <div className="cart__products__item__update__change">
                    <span className="cart__products__item__update__change__price">
                        {numberWithCommat(item.product[0].price)}
                    </span>
                    <div className="product__info__item__quantity">
                        <div 
                            className="product__info__item__quantity__update"
                            onClick = {() => updateQuantity('minus')}
                        >
                            <i className = 'bx bx-minus'></i>
                        </div>
                        <div className="product__info__item__quantity__number">
                            {quantity}
                        </div>
                        <div 
                            className="product__info__item__quantity__update"
                            onClick = {() => updateQuantity('plus')}
                        >
                            <i className = 'bx bx-plus'></i>
                        </div>
                    </div>
                    <div className="cart__products__item__update__change__delete" onClick = {() => deleteProduct()}>
                        <i className = 'bx bx-trash'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
}
