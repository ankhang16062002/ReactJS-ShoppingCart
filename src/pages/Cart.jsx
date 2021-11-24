import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import Helmet from '../components/Helmet'
import productMethods from '../assets/fake-data/products'
import numberWithCommat from '../utils/numberWithCommat'
import Button from '../components/Button'
import CartItem from '../components/CartItem'


const Cart = () => {
    const productCart = useSelector((item) => item.cartItems.value)
    const productCartDetail = productMethods.getDetailProduct(productCart)

    const [totalAmount, setTotalAmount] = useState(productCartDetail.reduce((store, item) => store + item.quantity, 0))
    const [totalPrice, setTotalPrice] = useState(
        productCartDetail.reduce((store, item) => store + (item.product[0].price) * item.quantity, 0)
    )

    useEffect(() => {
        setTotalAmount(productCartDetail.reduce((store, item) => store + item.quantity, 0))
        setTotalPrice(productCartDetail.reduce((store, item) => store + (item.product[0].price) * item.quantity, 0))
    }, [productCartDetail])

    return (
        <Helmet title = {'Cart'}>
             <div className="container">
                <div className = 'cart'>
                    <div className="cart__info">
                        <span className="cart__info__amount">
                            {`Bạn đang có ${totalAmount} sản phẩm trong giỏ hàng`}
                        </span>
                        <div className="cart__info__price">
                            <span>Thành tiền:</span>
                            <span>{numberWithCommat(totalPrice)}</span>
                        </div>
                        <div className="cart__info__btns">
                                <Button>đặt hàng</Button>
                                <Link to = '/catalog'>
                                    <Button>tiếp tục mua hàng</Button>
                                </Link>
                        </div>
                    </div>
                    <div className="cart__products">
                        {
                            productCartDetail.map((item, index) => (
                                <CartItem item = {item} key = {index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
