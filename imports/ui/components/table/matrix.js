import React, { Component, PropTypes } from 'react';

import Item from './item';

export default class table extends Component {

  renderRows(cardList){
    
    that = this;
    return cardList.map(function(key, i){
      return (
        <tr key={i}>
          {key.map(function(item, j){
            return (<Item key={'t'+i+j}row={i} col={j} value={item}/>);
          })}
        </tr>
        )
    })
  }

  render() {
    const cl = this.props.cardList;

    return (
      <div>
        <table>
          <tbody>
            {this.renderRows(cl)}
          </tbody>
        </table>
      </div>
    );
  }
}

table.propTypes = {
  cardList: PropTypes.array.isRequired,
  pstate: React.PropTypes.object.isRequired,

};
