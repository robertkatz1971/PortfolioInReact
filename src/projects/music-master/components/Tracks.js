import React, { useState } from 'react';

const Tracks = ({ tracks }) => {

    if (!tracks) return null;

    const [playing, setPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [playingPreviewUrl , setPlayingPreviewUrl] = useState(null);


    //notice double arrow syntax. This returns a reference to the function which help rendering issues when assigning to a event (see: onClick of div below).
    const playAudio = (previewUrl) => () => {
        const audioPlayback = new Audio(previewUrl);

        try {
            if (playing) {
                audio.pause();
                setPlaying(false);
                //chose different track without stopping previous track
                if (playingPreviewUrl !== previewUrl) {
                    managePlayingTrack(audioPlayback, previewUrl);
                }    
            } else {
                managePlayingTrack(audioPlayback, previewUrl);
            }
        }
        catch(error) {
            console.log(error.message);
        }
        
    }

    const managePlayingTrack = (newAudio, url) => {
        newAudio.play();
        setAudio(newAudio); 
        setPlayingPreviewUrl(url);   
        setPlaying(true)
    }

    const trackIcon = (track) => {
        if (!track.preview_url) {
            return <span>N/A</span>
        }
        if (playing && playingPreviewUrl === track.preview_url) {
            return <span>| |</span>
        }
        return <span>&#9654;</span>
    }

    return (
        <div>
            {
                tracks.map(track => {
                    const { id, name, album, preview_url } = track;
                    return (
                        <div 
                            key={id} 
                            onClick={playAudio(preview_url)} 
                            className='track'
                        >
                            <img 
                                src={album.images[0].url} 
                                alt='track image'
                                className='track-image' 
                            />
                            <p className='track-text'>{name}</p>
                            <p className='track-icon'>{trackIcon(track)}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Tracks;