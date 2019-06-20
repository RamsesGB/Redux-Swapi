import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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
const mapStateToProps = state => ({
  isLoading: state.isLoading,
  characters: state.characters
});

export default connect( mapStateToProps,{ getCharacter })(CharacterListView);

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends
});

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  photoOfTheDay: state.photoOfTheDay
});