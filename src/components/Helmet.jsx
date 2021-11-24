import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const Helmet = (props) => {
    useEffect(() => {
        document.title = `YoLo - ${props.title}`
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [props.title])

    return (
        <div className = 'helmet'>
            {props.children}
        </div>
    )
}

export default Helmet

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
}
