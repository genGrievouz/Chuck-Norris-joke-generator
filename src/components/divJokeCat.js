import React from 'react';
import { useSelector } from 'react-redux';

const styles = {
    joke: {
        fontSize: '30px'
    }
}

export default function JokeCateg() {

    const data = useSelector(state => state.data.jokes);
    
    return (
        <div>
            <p style={styles.joke}> {data.value} </p>
            <p> Category: {data.categories} </p>
        </div>
    );
}