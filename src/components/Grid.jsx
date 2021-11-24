import React from 'react'
import PropTypes from 'prop-types'

const Grid = (props) => {
    const col = `col-${props.col}`
    const md = props.md ? `col-md-${props.md}` : ''
    const sm = props.sm ? `col-sm-${props.sm}` : ''
    const gap = props.gap ? `${props.gap}px` : '0'

    return (
        <div 
            className = {`grid ${col} ${md} ${sm}`}
            style = {{
                gap,
            }}
        >
            {props.children}
        </div>
    )
}

export default Grid

Grid.propTypes = {
    gap: PropTypes.string,
    col: PropTypes.string.isRequired,
    md: PropTypes.string,
    sm: PropTypes.string
}


