import React from 'react'
import './LeftSection.css'

const LeftSection = () => {
    return (
        <div className="section left">
            <div className="imageWrapper">
                <img className="img brand" src="/typesh.png" alt="Typed.sh"/>
            </div>
            <div className="header brand">Typed.sh</div>
        </div>
    )
}
export default LeftSection