import React from 'react'

const Section = (props) => {
    return (
        <div className = 'section'>
            {props.children}
        </div>
    )
}

const SectionTitle = (props) => {
    return (
        <div className = 'section__title'>
            <h2> {props.children}</h2>
        </div>
    )
}

const SectionBody = (props) => {
    return (
        <div className = 'section__body'>
            {props.children}
        </div>
    )
} 


export {SectionTitle, SectionBody}
export default Section
