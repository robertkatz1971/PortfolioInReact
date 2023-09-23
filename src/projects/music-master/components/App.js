import React, { useState } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import SearchBar from './SearchBar';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

const App = () => {

    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);

    const onSearchArtist = (artistQuery) => {
        //get artist
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
               if (json.artists.total > 0) {
                const artist = json.artists.items[0];
                setArtist(artist);

                //get top 10 tracks
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                   .then(response => response.json())
                   .then(json => setTracks(json.tracks))
                   .catch(error => alert(error.message));
               }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div>
            <h2>Music Master</h2>
            <SearchBar searchCallback={onSearchArtist} placeHolder='Search for an artist' />
            <Artist artist={artist} />
           <Tracks tracks={tracks} />
        </div>
    )
}

export default App;