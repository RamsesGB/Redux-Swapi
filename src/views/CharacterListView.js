import React from "react";
import { connect } from "react-redux";
import { getCharacter } from '../actions/index';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Loading Star Wars Characters</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state.charsReducer.characters)
  return {  
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.isLoading,
  }
};

export default connect( mapStateToProps,{ getCharacter })(CharacterListView);
