import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { fetchJokesSearch } from '../actions/fetchDataSearch.js';
import { getInput } from '../actions/getInput.js';

const styles = {
    button: {
        color: 'black',
        backgroundColor: 'orange',
        fontWeight: 'bold'
    }
}

function ButtonSearch(){
    const dispatch = useDispatch();
    return <Button style={styles.button} onClick={() => dispatch(fetchJokesSearch(getInput()))}> Search </Button>
}

export default ButtonSearch;