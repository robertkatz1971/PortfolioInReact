import React, {useState, useEffect} from 'react';
import { getJokes } from '../services/JokesService';
import Joke from './Joke';



const Jokes = () => {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        let mounted = true;
        getJokes()
            .then(items => {
                if (mounted) {
                    setJokes(items);
                }
            });
        return () => mounted = false;
    }, []);

    return (
        <div>
            <h3>Dad's Joke List</h3>
            {jokes.map(joke => <Joke key={joke.id} joke={joke} />)}
        </div>
    )
}


export default Jokes;