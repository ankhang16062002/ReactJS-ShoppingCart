import React, {useRef} from 'react'
import PropTypes from 'prop-types'


const CheckBox = (props) => {
    const inputCheck = useRef(null)

    const handleClick = () => {
        props.onClick(inputCheck.current)
    }

    return (
        <div className = 'check-box'>
            <label className = 'check-box__custom'>
                <input 
                    type="checkbox" 
                    id = {props.label} 
                    onClick = {handleClick} 
                    checked = {props.checked}
                    ref = {inputCheck}  
                />
                <span className = 'check-box__custom__slug'>
                    <i className="bx bx-check"></i>
                </span>
                {props.label}
            </label>
        </div>
    )
}

export default CheckBox

CheckBox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string
}
