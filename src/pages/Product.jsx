import React from 'react'
import {useParams} from 'react-router-dom'

import productMethods from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import Section, {SectionTitle, SectionBody} from '../components/Section'
import Grid from '../components/Grid'
import ProductCart from '../components/ProductCart'
import ProductView from '../components/ProductView'

const Product = () => {
    const {slug} = useParams()
    const product = productMethods.getProductBySlug(slug)[0]
    const relatedProducts = productMethods.getProductByAmount(8)

    return (
        <Helmet title = {'Product'}>
            <div className = 'product'>
                <div className="container">
                    <ProductView product = {product} />
                    <Section>
                        <SectionTitle>
                            khám phá thêm
                        </SectionTitle>
                        <SectionBody>
                            <Grid
                                col = '4'
                                md = '2'
                                sm = '1'
                                gap = '20'
                            >
                                {
                                    relatedProducts.map((item, index) => (
                                        <ProductCart product = {item} key = {index}  />
                                    ))
                                }
                            </Grid>
                        </SectionBody>
                    </Section>
                </div>
            </div>
        </Helmet>
    )
}

export default Product
