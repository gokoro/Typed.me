import React from 'react'
import './section.css'
import 'animate.css/animate.min.css'

const style = {
    display: 'flex',
    flex: '1 1 0',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: '0 0 0 24px',
}
const imgStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '3px solid #FFF'
}
const nicknameStyle = {
    marginLeft: '24px',
    paddingLeft: '24px',
    borderLeft: '1.5px solid #646464',
    display: 'flex',
    alginItems: 'center',
    flexFlow: 'column nowrap'
}
const headerStyle = {
    margin: '0',
    fontSize: '28px',
    fontWeight: '500',
}
const headerTypeStyle = {
    color: '#a8a8a8',
    fontSize: '12px',
    margin: '0'
}
const RightSection = props => {
    return (
        <div style={style} className="section right">
            <img style={imgStyle} src={props.data.avatarurl} alt={props.data.username} className="profileimg"/>
            <div style={nicknameStyle} className="nickname animate__fadeOutRight">
                {!props.hover ? 
                    <p className=" animate__animated animate__fadeInRight animate__faster" style={headerTypeStyle}>Author</p> : <> 
                    <p className="typeAuthor animate__animated animate__fadeOutLeft animate__faster" style={headerTypeStyle}>Author</p>
                    <p className=" animate__animated animate__fadeInRight animate__faster" style={headerTypeStyle}> » 작성 글 보기</p> </>
                }
                <h1 style={headerStyle}>{props.data.username}</h1>
            </div>
        </div>
    )
}
export default RightSection