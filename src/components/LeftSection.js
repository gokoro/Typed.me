import React from 'react'

const sectionStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    flex: '0 0 100px',
    zIndex: '5'
}
const brandHeaderStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#cdcdd7',
    marginBottom: '14px'
}
const brandImageStyle = {
    width: '70px'
}
const imageWrapperStyle = {
    padding: '4px',
    marginTop: '14px',
}
const LeftSection = props => {

    return (
        <div style={sectionStyle} className="section left">
            <div style={imageWrapperStyle} className="imageWrapper">
                <img style={brandImageStyle} src="/typesh.png" alt=""/>
            </div>
            <div style={brandHeaderStyle} className="header">Typed.sh</div>
        </div>
    )
}
export default LeftSection