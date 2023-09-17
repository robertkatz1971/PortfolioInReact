import React from "react"

const SocialProfile = (props) => {

    const {link, image } = props.profile;
    
    return (
        <span style={{ margin: 10}}>    
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="profile" style={{height: 25, width: 25}}  /> 
            </a>
        </span>      
    )
}

export default SocialProfile;