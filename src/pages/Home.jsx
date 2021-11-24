import React from 'react'
import heroSliderData from '../assets/fake-data/hero-slider'
import productMethods from '../assets/fake-data/products'
import banner from '../assets/images/banner.png'

import SliderHome from '../components/SliderHome'
import Policy from '../components/Policy'
import ProductCart from '../components/ProductCart'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import Helmet from '../components/Helmet'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <Helmet title = {'Home'}>
            <div className = 'home'>
                <SliderHome data = {heroSliderData} control />
                <Policy />
                <div className="container">
                    <Section>
                            <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
                            <SectionBody>
                                <Grid
                                    col = '4'
                                    md = '2'
                                    sm = '1'
                                    gap = '20'
                                >
                                    {
                                        productMethods.getProductByAmount(4).map((product, index) => (
                                            <ProductCart key = {index} product = {product} />
                                        ))
                                    }
                                </Grid>
                            </SectionBody>
                    </Section>

                    <Section>
                            <SectionTitle>sản phẩm mới</SectionTitle>
                            <SectionBody>
                                <Grid
                                    col = '4'
                                    md = '2'
                                    sm = '1'
                                    gap = '20'
                                >
                                    {
                                        productMethods.getProductByAmount(8).map((product, index) => (
                                            <ProductCart key = {index} product = {product} />
                                        ))
                                    }
                                </Grid>
                            </SectionBody>
                    </Section>

                    <Section>
                        <SectionBody>
                            <Link to = '/product'>
                                <div className="home__banner">
                                    <img src= {banner} alt="banner" />
                                </div>
                            </Link>
                        </SectionBody>
                    </Section>

                    <Section>
                            <SectionTitle>phổ biến</SectionTitle>
                            <SectionBody>
                                <Grid
                                    col = '4'
                                    md = '2'
                                    sm = '1'
                                    gap = '20'
                                >
                                    {
                                        productMethods.getProductByAmount(12).map((product, index) => (
                                            <ProductCart key = {index} product = {product} />
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

export default Home
