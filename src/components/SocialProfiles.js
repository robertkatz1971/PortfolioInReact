import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';
import SocialProfile from './SocialProfile';


const SocialProfiles = () => {
    return (
        <div>
            <h2>Social Profiles</h2>
            <div>
                {
                    SOCIAL_PROFILES.map((profile) => {
                        return (
                            <SocialProfile key={profile.id} profile={profile} />
                        );
                    })
                }
            </div>
        
        </div>
    )
}

export default SocialProfiles;