import React, { Component, PropTypes } from 'react';


export default class ScoreBoard extends Component {

  constructor(props){
    super(props)
    this.state = {score:0}
  }

  incrementScore(){
    this.setState({score:this.state.score+1});
  }

  render() {

    return (
      <div>
        score: {this.state.score}
      </div>
    );
  }
}
