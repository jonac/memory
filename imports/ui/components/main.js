import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Matrix from "./table/matrix.js";

export default class eventList extends Component {

  render() {
    const cardMatrix= [['a','b','c','d'],['e','f','g','h'],['a','b','c','d'],['e','f','g','h']];
    return (
      <div className="container-fluid">
        <Matrix cardList={cardMatrix} />
      </div>

    );
  }
}

