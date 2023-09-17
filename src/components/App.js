import React, { useState } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/RobertKatz.png';
import Title from './Title';

const App = () => {

    const [displayBio, setDisplayBio] = useState(false);

    toggleBio = () => {
        setDisplayBio(!displayBio); 
     }

    let buttonCaption = displayBio ? 'Show less' : 'Read more';

    let bio = (
        <div>
            <p>I live in NJ.</p>
            <p>My favorite hobby is golf.</p>
        </div>
    )
    
    return (
        <div>
            <img src={profile} alt='Robert Katz' className='profile' />
            <h1>Hello!</h1>
            <p>My name is Robert.</p>
            <Title />
            <p>I am learning React.</p>
            {displayBio ? bio : null}
            <button onClick={toggleBio}>{buttonCaption}</button>
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
        </div>
    )
}


export default App;