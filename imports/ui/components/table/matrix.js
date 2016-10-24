import React, { Component, PropTypes } from 'react';
import R from 'ramda';

import Item from './item';

export default class table extends Component {
  constructor(props){
    super(props);
    this.state = {picked:null, completed:[] }
  }

  clickHandler(obj, val, row, col){
    if (R.indexOf(obj, this.state.completed) === -1) {
      if (this.state.picked) {
         oldObj = this.state.picked;
       
        if(oldObj.props.value === val){
          this.props.updateScore();
          oldObj.setToCompleted();
          obj.setToCompleted();
          this.state.completed.push(oldObj)
          this.state.completed.push(obj)
        }else{
          oldObj.setToPicture();
          obj.setToPicture();
        }
        this.setState({picked:null});
      }else{
        this.setState({picked:obj})
        obj.setToValue(row,col)
      }
    }
  }

  renderRows(cardList){
    that = this;
    return cardList.map(function(key, i){
      return (
        <tr key={i}>
          {key.map(function(item, j){
            return (<Item key={'t'+i+j} row={i} col={j} value={item} click={that.clickHandler.bind(that)}/>);
          })}
        </tr>
        )
    })
  }

  render() {
    const cl = this.props.cardList;
    return (
      <div id="game">
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
  updateScore: React.PropTypes.func.isRequired,

};
//this.refs.tableItem02.setToValue()