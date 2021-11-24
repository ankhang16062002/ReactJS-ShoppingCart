import React, {useState, useEffect, useCallback, useRef} from 'react'

import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import sizes from '../assets/fake-data/product-size'
import productMethods from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import ListCartCatalog from '../components/ListCartCatalog'
import Button from '../components/Button'

const Catalog = () => {

    const initialFilter = {
        categorys: [],
        colors: [],
        sizes: []
    }

    const initialProduct = productMethods.getAllProduct();

    const [products, setProducts] = useState(initialProduct)
    
    const [filter, setFilter] = useState(initialFilter)

    const selectFilter = (type, checked, slug) => {
        if(checked) {
            switch(type) {
                case 'CATEGORY':
                    const newCategorys = [...filter.categorys, slug]
                    setFilter({...filter, categorys: newCategorys})
                    break;
                case 'COLOR':
                    const newColors = [...filter.colors, slug]
                    setFilter({...filter, colors: newColors})
                    break;
                case 'SIZE':
                    const newSizes = [...filter.sizes, slug]
                    setFilter({...filter, sizes: newSizes})
                    break;
                default:
                    break;
            }
        } else {
            switch(type) {
                case 'CATEGORY':
                    const newCategorys = filter.categorys.filter((category) => category !== slug)
                    setFilter({...filter, categorys: newCategorys})
                    break;
                case 'COLOR':
                    const newColors = filter.colors.filter((color) => color !== slug)
                    setFilter({...filter, colors: newColors})
                    break;
                case 'SIZE':
                    const newSizes = filter.sizes.filter((size) => size !== slug)
                    setFilter({...filter, sizes: newSizes})
                    break;
                default:
                    break;
            }
        }
    }

    const updateProduct = useCallback(() => {
        let newProducts = initialProduct
        if(filter.categorys.length > 0) {
            newProducts = newProducts.filter((element) => filter.categorys.includes(element.categorySlug))
        }

        if(filter.colors.length > 0) {
            newProducts = newProducts.filter((element) => {
               const check = element.colors.find((color) => filter.colors.includes(color))
               return check !== undefined
            })
        }

        if(filter.sizes.length > 0) {
            newProducts = newProducts.filter((element) => {
                const check = element.size.find((size) => filter.sizes.includes(size))
                return check !== undefined
            })
        }

        setProducts(newProducts)
    }, [filter, initialProduct])

    
    useEffect(() => {
        updateProduct()
    }, [updateProduct])

    const removeFilter = () => setFilter(initialFilter)

    const filterElement = useRef(null)
    const showHideFilter = () => {
        filterElement.current.classList.toggle('active')
    }
    
    return (
        <Helmet title = {'Catalog'}>
            <div className="container">
                <div className = 'catalog'>
                    <div className="catalog__filter" ref = {filterElement}>

                        <div className = 'catalog__filter__item'>
                           <span className="catalog__filter__item__out" onClick = {showHideFilter}>
                                <i className = 'bx bx-left-arrow-alt'></i>
                           </span>
                        </div>

                        <div className="catalog__filter__item">
                            <h5 className = 'catalog__filter__item__title'>danh mục sản phẩm</h5>
                            <div className="catalog__filter__item__style">
                                {
                                    category.map((item, index) => (
                                        <div className="catalog__filter__item__style__item" key = {index}>
                                            <CheckBox 
                                                label = {item.display} 
                                                onClick = {(input) => selectFilter('CATEGORY', input.checked, item.categorySlug)}
                                                checked = {filter.categorys.includes(item.categorySlug)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="catalog__filter__item">
                            <h5 className = 'catalog__filter__item__title'>màu sắc</h5>
                            <div className="catalog__filter__item__style">
                                {
                                    colors.map((item, index) => (
                                        <div className="catalog__filter__item__style__item" key = {index}>
                                            <CheckBox 
                                                label = {item.display} 
                                                onClick = {(input) => selectFilter('COLOR', input.checked, item.color)}
                                                checked = {filter.colors.includes(item.color)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="catalog__filter__item">
                            <h5 className = 'catalog__filter__item__title'>kích cỡ</h5>
                            <div className="catalog__filter__item__style">
                                {
                                    sizes.map((item, index) => (
                                        <div className="catalog__filter__item__style__item" key = {index}>
                                            <CheckBox
                                                label = {item.display}
                                                onClick = {(input) => selectFilter('SIZE', input.checked, item.size)}
                                                checked = {filter.sizes.includes(item.size)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="catalog__filter__item">
                            <Button
                               size = 'sm' 
                               onClick = {removeFilter}
                            >
                                xóa bộ lọc
                            </Button>
                        </div>

                    </div>

                    <div className="catalog__toggle">
                        <Button
                            size = 'sm'
                            onClick = {showHideFilter}                      
                        >
                            bộ lọc
                        </Button>
                    </div>

                    <div className="catalog__product">
                        <ListCartCatalog products = {products}/>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
