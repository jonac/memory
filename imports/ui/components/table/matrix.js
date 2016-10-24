import React, { Component, PropTypes } from 'react';


export default class table extends Component {

  renderRows(cardList){
    tdstyle= {height:"121", width:"96"}
    return cardList.map(function(key, i){
      return (
        <tr key={i}>
          {key.map(function(item, j){
            return (<td key={j} id={"table"+i+j} style={tdstyle}><img src="/images/card.jpg" /></td>)
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

};
