import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

import numberWithCommat from '../utils/numberWithCommat'
import Section, {SectionBody} from '../components/Section'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import {addItems} from '../redux/cart-item/cartItemSlice'

const ProductView = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    let product = props.product

    if(product === undefined) {
        product = {
            image01: '',
            image02: '',
            price: '',
            colors: [],
            size: [],

        }
    }

    const [mainImg, setMainImg] = useState(product.image01)
    const [append, setAppend] = useState(false)

    const [color, setColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)

        setColor(undefined)
        setSize(undefined)
        setMainImg(product.image01)
        setQuantity(1)
    }, [product])

    const updateQuantity = (type) => {
        switch(type) {
            case 'minus':
                setQuantity(quantity === 1 ? 1 : quantity - 1)
                break;
            case 'plus':
                setQuantity(quantity + 1)
                break;
            default:
                break;
        }
    }

    const check = () => {
        if(color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return 0
        }

        if(size === undefined) {
            alert('Vui lòng chọn kich cỡ!')
            return 0
        }

        return 1
    } 

    const addToCart = () => {
        if(check()) {
            dispatch(addItems({
                color,
                size,
                quantity,
                slug: product.slug,
            }))

            alert('Thêm vào giỏ hành thành công!')
        }
    }

    const gotoCart = () => {
        if(check()) {
            dispatch(addItems({
                color,
                size,
                quantity,
                slug: product.slug,
            }))
            history.push('/cart')
        }
    }

    return (
        <Section>
            <SectionBody>
                <div className="product__wrap">
                    <div className="product__images">
                        <div className="product__images__list">
                            <div className="product__images__list__item">
                                <div className="product__images__list__item__img">
                                    <img src= {product.image01} alt="img01" onClick = {() => setMainImg(product.image01)}/>
                                </div>
                                <div className="product__images__list__item__img">
                                    <img src= {product.image02} alt="img02" onClick = {() => setMainImg(product.image02)} />
                                </div>
                            </div>
                            <div className="product__images__list__main">
                                <img src= {mainImg}  alt="img" />
                            </div>
                        </div>

                        <div className= {`product__images__decription ${append ? 'append' : ''}`}>
                            <h3 className="product__images__decription__title">
                                Chi tiết sản phẩm
                            </h3>
                            <div className="product__images__decription__text" dangerouslySetInnerHTML = {{__html: product.description}}>
                            </div>
                            <div className= 'product__images__decription__btn'>
                                <Button 
                                    size = 'sm'
                                    onClick = {() => setAppend(!append)}
                                >
                                    {append ? 'thu gọn' : 'xem thêm'}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="product__info">
                        <div className="product__info__item">
                            <h3 className = 'product__info__item__title'>{product.title}</h3>
                        </div>
                        <div className="product__info__item">
                            <span className = 'product__info__item__price'>
                                {numberWithCommat(product.price)}
                            </span>
                        </div>
                        <div className="product__info__item">
                            <span className = 'product__info__item__style'>Màu sắc</span>
                            <div className="product__info__item__list">
                                {
                                    product.colors.map((item, index) => (
                                        <div 
                                            className= {
                                                `product__info__item__list__item ${item === color ? 'active' : ''}`
                                            }
                                            onClick = {() => setColor(item)}
                                            key = {index}
                                        >
                                            <span className = {`cricle bg-${item}`}></span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="product__info__item">
                            <span className = 'product__info__item__style'>Kích cỡ</span>
                            <div className="product__info__item__list">
                                {
                                    product.size.map((item, index) => (
                                        <div 
                                            className= {
                                                `product__info__item__list__item ${item === size ? 'active' : ''}`
                                            }
                                            onClick = {() => setSize(item)}
                                            key = {index}
                                        >
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="product__info__item">
                            <span className = 'product__info__item__style'>Số lượng</span>
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
                        </div>
                        <div className="product__info__item">
                            <Button onClick = {addToCart}>thêm vào giỏ</Button>
                            <Button onClick = {gotoCart}>mua ngay</Button>
                        </div>
                    </div>

                    <div className= {`product__images__decription mobile ${append ? 'append' : ''}`}>
                        <h3 className="product__images__decription__title">
                            Chi tiết sản phẩm
                        </h3>
                        <div className="product__images__decription__text" dangerouslySetInnerHTML = {{__html: product.description}}>
                        </div>
                        <div className= 'product__images__decription__btn'>
                            <Button 
                                size = 'sm'
                                onClick = {() => setAppend(!append)}
                            >
                                {append ? 'thu gọn' : 'xem thêm'}
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionBody>
        </Section>
    )
}

export default ProductView

ProductView.propTypes = {
    product: PropTypes.object,
}
