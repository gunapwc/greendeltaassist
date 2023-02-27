import React from "react";
import "./newsroomCard.scss";


const NewsRoomCard = (props) => {


    return (
        <div className='Newsroom_card' onClick={props.click}>
            <div >
                <img src={props.image} width="100%" />
            </div>
            <div className='Newsroom_card_inner'>
                <button>{props.category}</button>
                <h1 >{props.title}</h1>
                <p >{props.date}</p>
            </div>

        </div>
    )
}

const NewsRoomBanner = (props) => {


    return (
        <div className='Newsroom_Banner'>
            <div className='Newsroom_Banner_img'>
                <img src={props.image} width="100%" height="100%"/>
            </div>
            <div className='Newsroom_Banner_inner'>
                <button>{props.category}</button>
                <h1 >{props.title}</h1>
                <p >{props.date}</p>
            </div>

        </div>
    )
}

export {NewsRoomCard, NewsRoomBanner};