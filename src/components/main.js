import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "./../actions/fetchCategories";
import { fetchJokeRandom } from "./../actions/fetchDataRandom";

import ControlledOpenSelect  from './openSelect';
import InputText from './inputText.js';
import ButtonNext from './clickNext.js';
import ButtonSearch from './clickSearch.js';
import JokeCateg from './divJokeCat.js';


class Main extends Component {

    componentDidMount() {
      this.props.dispatch(fetchJokeRandom());
      this.props.dispatch(fetchCategories());
    }

    render() {
        return (
            <div> 
                <JokeCateg/>
                <div>
                    <ControlledOpenSelect/>
                    <ButtonNext/>
                </div>
                <div>
                    <div>
                        <InputText/>
                    </div>
                    <div>
                        <ButtonSearch/> 
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    jokes: state.jokes,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(Main);