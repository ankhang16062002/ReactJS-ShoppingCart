import React from 'react'

import { Switch, Route } from 'react-router'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Event from '../pages/Event'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Routes = () => {
    return (
        <Switch>
                <Route path = '/catalog' exact component = {Catalog} />
                <Route path = '/cart' exact component = {Cart} />
                <Route path = '/' exact component = {Home} />
                <Route path = '/event' component = {Event}/>
                <Route path = '/contact' component = {Contact}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/:slug' component = {Product} />
        </Switch>
    )
}

export default Routes
