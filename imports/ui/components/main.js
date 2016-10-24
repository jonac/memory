import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Matrix from "./table/matrix.js";
import ScoreBoard from "./scoreboard/scoreboard.js";

export default class main extends Component {
  constructor(props){
    super(props);

  }

  incrementScore(){
    this.refs.scoreboard.incrementScore()
  }

  render() {
    const cardMatrix= [['a','b','c','d'],['e','f','g','h'],['a','b','c','d'],['e','f','g','h']];
    return (
      <div>
        <div className="container-fluid">
          <Matrix cardList={cardMatrix} updateScore={this.incrementScore.bind(this)} />
        </div>
        <div>
          <ScoreBoard ref={"scoreboard"}/>
        </div>

      </div>
    );
  }
}

