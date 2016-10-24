import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Matrix from "./table/matrix.js";
import ScoreBoard from "./scoreboard/scoreboard.js";

export default class main extends Component {
  constructor(props){
    super(props);
    this.state = {score:0, picked:false, pickedValue:'a' , pickedRow:0, pickedCol:0}
    Session.set("score",0)
    Session.set("picked", false)
    Session.set("pickedValue",null)
    Session.set("pickedRow",0)
    Session.set("pickedCol",0)
  }

  render() {
    const cardMatrix= [['a','b','c','d'],['e','f','g','h'],['a','b','c','d'],['e','f','g','h']];
    return (
      <div>
        <div className="container-fluid">
          <Matrix cardList={cardMatrix} pstate={this.state} />
        </div>
        <div>
          <ScoreBoard pstate={this.state} />
        </div>
      </div>

    );
  }
}

