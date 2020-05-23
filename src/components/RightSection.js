import React from 'react'
import './RightSection.css'
import 'animate.css/animate.min.css'

const RightSection = props => {
    return (
        <div className="section right">
            <img src={props.data.avatarurl} alt={props.data.username} className="profileimg"/>
            <div className="nickname">
                {!props.hover ?
                    <p className="animate__animated animate__fadeInRight animate__faster">Author</p> : <> 
                    <p className="animate__animated animate__fadeInRight animate__faster"> » 작성 글 보기</p> </>
                }
                <h1 className="header username">{props.data.username}</h1>
            </div>
        </div>
    )
}
export default RightSection