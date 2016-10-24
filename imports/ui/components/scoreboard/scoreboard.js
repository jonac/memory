import React, { Component, PropTypes } from 'react';


export default class ScoreBoard extends Component {


  render() {

    return (
      <div>
        score: {Session.get('score')}
      </div>
    );
  }
}

ScoreBoard.propTypes = {
  pstate: React.PropTypes.object.isRequired
};
