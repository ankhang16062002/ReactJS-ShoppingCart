import React, {useEffect, useState, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Button from '../components/Button'

const SliderHome = (props) => {

    const data = props.data
    const timeOut = props.timeOut ? props.timeOut : 3000

    const [itemActive, setItemAcitve] = useState(0)

    const nextActive = useCallback(
        () => {
            let newActiveIndex = itemActive === data.length - 1 ? 0 : itemActive + 1
            setItemAcitve(newActiveIndex)
        }, 
    [itemActive, data])

    const preActive = () => {
        let newActiveIndex = itemActive === 0 ? data.length - 1 : itemActive - 1
        setItemAcitve(newActiveIndex)
    }

    useEffect(() => {
        if(props.auto) {
            const repeatAction = setInterval(() => {
                nextActive()
            }, timeOut)

            return () => {
                clearInterval(repeatAction)
            }
        }
    }, [props, timeOut, nextActive])

    return (
        <div className = 'slider-home'>
            <div className="container">
                <div className="slider-home__list">
                    {
                        data.map((item, index) => (
                            <SliderHomeItem key = {index} item = {item} active = {itemActive === index ? 'active' : ''} />
                        ))
                    }
                </div>
                {
                    props.control ? (
                        <div className="slider-home__controller">
                            <div className="slider-home__controller__item" onClick = {preActive}>
                                <i className = 'bx bx-chevron-left'></i>
                            </div>
                            <div className="slider-home__controller__amount">
                                {`${itemActive+1}/${data.length}`}
                            </div>
                            <div className="slider-home__controller__item" onClick = {nextActive}>
                                <i className = 'bx bx-chevron-right'></i>
                            </div>
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

const SliderHomeItem = (props) => {
    const item = props.item

    const imgRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if(imgRef && imgRef.current) {
                if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 90) {
                    imgRef.current.classList.add('active')
                } else {
                    imgRef.current.classList.remove('active')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className = {`slider-home__list__item ${props.active}`}>
            <div className="slider-home__list__item__info">
                <h1 className = {`color-${item.color}`}>{item.title}</h1>
                <p>{item.description}</p>
                <Link to = {`${item.path}`}>
                    <Button 
                        animate
                        backgroundColor = {item.color}
                        icon = 'bx bx-cart'
                        // size = 'sm'
                    >
                        {'xem chi tiết'}
                    </Button>
                </Link>
            </div>
            <div className="slider-home__list__item__img" ref = {imgRef}>
                <div className= {`shape bg-${item.color}`} ></div>
                <img src= {item.img} alt="" />
            </div>
        </div>
    )
}

export default SliderHome

SliderHome.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
