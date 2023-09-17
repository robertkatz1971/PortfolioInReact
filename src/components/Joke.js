const Joke = (props) => {
    const {
        setup,
        punchline
     } = props.joke
    
     return (
        <>
            <p>{setup} (<em>{punchline}</em>)</p>
        </>
     )
}

export default Joke;