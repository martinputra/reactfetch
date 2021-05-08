import React from 'react'
import "./card.css"

export default function Card({
    image, 
    username, 
    name, 
    email,
    phone,
    website }) {

    return (
        <div className="card">
            
            <div className="card_left">
                <img src={image} alt="gambar_avatar_saya" className="avatar" />
            </div>

            <div className="card_right">
                <h1 className="username">{username}</h1>
                <p className="biodata">
                    name: {name} <br /><hr />
                    email: {email} <br /><hr />
                    phone: {phone} <br /><hr />
                    website: {website} <br /> <hr />
                </p>
            </div>
        </div>
    )
}