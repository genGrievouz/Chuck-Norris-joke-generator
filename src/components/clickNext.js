import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchJokes } from './../actions/fetchDataCategory.js';
import { getCategory } from './../actions/getCategory';

const styles = {
    button: {
        color: 'black',
        backgroundColor: 'orange',
        fontWeight: 'bold'
    }
}

function ButtonNext(){
    const dispatch = useDispatch();
    return <Button style = {styles.button} onClick={ () => dispatch(fetchJokes(getCategory()))}> Next ! </Button>
}

export default ButtonNext;