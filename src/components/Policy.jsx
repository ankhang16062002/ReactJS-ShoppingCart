import React from 'react'

import policy from '../assets/fake-data/policy'
import PolicyCart from './PolicyCart'
import Section from './Section'
import Grid from './Grid'

const Policy = () => {
    return (
        <div className = 'policy'>
            <div className="container">
                <Section>
                    <Grid
                        col = '4'
                        md = '2'
                        sm = '1'
                        gap = '20'
                    >
                        {
                            policy.map((item, index) => (
                                <PolicyCart
                                    key = {index}
                                    icon = {item.icon}  
                                    name = {item.name}
                                    description = {item.description}
                                />
                            ))
                        }
                    </Grid>
                </Section>
            </div>
        </div>
    )
}

export default Policy
