import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import Grid from '../components/Grid'
import ProductCart from './ProductCart'

const ListCartCatalog = (props) => {
    const listCartCatalog = useRef(null)
    const perload = 6

    const [index, setIndex] = useState(0)

    const [currentList, setCurrentList] = useState([])

    const [load, setLoad] = useState(true)

    useEffect(() => {
        setCurrentList(props.products.slice(0, perload))
        setIndex(1)
    }, [props.products])

    useEffect(() => {
        const handleScroll = () => {
            if(listCartCatalog && listCartCatalog.current) {
                if(window.scrollY + window.innerHeight >= listCartCatalog.current.clientHeight + listCartCatalog.current.offsetTop + 400) {
                    setLoad(true)
                }
            }
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [listCartCatalog])

    useEffect(() => {
        const pages = Math.floor(props.products.length / perload)
        const maxIndex = props.products.length % perload === 0 ? pages : pages + 1

        if(load && index < maxIndex) {
            const start = perload * index
            const end = perload * index + perload

            setCurrentList(currentList.concat(props.products.slice(start, end)))
            setIndex(index + 1)
            setLoad(false)
        }

    }, [load, index, perload, currentList, props.products])


    return (
        <div className = 'list-cart-catalog' ref = {listCartCatalog}>
            <Grid
                col = '3'
                md = '2'
                sm = '1'
                gap = '20'
            >
                {
                    currentList.map((item, index) => (
                        <ProductCart key = {index} product = {item}  />
                    ))
                }
            </Grid>
        </div>
    )
}

export default ListCartCatalog

ListCartCatalog.propTypes = {
    products: PropTypes.array,
}
