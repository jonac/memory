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

  createRandomList(list, row,col){
    list2 = list.slice(); // make a copy of a list
    list.push.apply(list,list2); // create a list with 2 of every element
    console.log(list.length)
    let len = list.length;
    let ret = [];
    for(i = 0; i < row ; i++){
      let part = [];
      for( j=0; j < col; j++){
        index = Math.floor(Math.random() * list.length)  
        part.push(list.splice(index,1)[0])
      }
      console.log(part)
      ret.push(part)
    }
    console.log(ret)
    return ret;
    
  }

  render() {
    //TODO: setup ranomdly generated lists
    const cardMatrix1= this.createRandomList(['a','b','c','d','e','f','g','h'], 4, 4)
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

