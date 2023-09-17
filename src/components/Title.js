import React, { useState, useEffect } from "react";

const TITLES = [
    'a software engineer',
    'a poker player',
    'a father of three'
]

const Title = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        animateTitles();

        return () => clearInterval(titleInterval);
    }, [titleIndex])
  
    animateTitles = () => {
        titleInterval = setInterval(() => {
            const index = (titleIndex + 1) % TITLES.length;
            setTitleIndex(index);
        }, 4000);
    }
    
    return (
        <p className="fade-in-text">I am {TITLES[titleIndex]}</p>
    )
}

export default Title;