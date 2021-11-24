import React from 'react'
import PropTypes from 'prop-types'

const PolicyCart = (props) => {
    return (
        <div className = 'policy__cart'>
            <div className="policy__cart__icon">
                <i className = {props.icon}></i>
            </div>
            <div className="policy__cart__info">
                <h5>{props.name}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default PolicyCart

PolicyCart.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
}
