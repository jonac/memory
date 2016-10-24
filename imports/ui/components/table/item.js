import React, { Component } from 'react';
import classnames from 'classnames';


export default class item extends Component {

  setToValue(){
    document.getElementById('table'+this.props.row+this.props.col).innerHTML=this.props.value;
  }

  setToPicture(){
    document.getElementById('table'+this.props.row+this.props.col).innerHTML="<img src='/images/card.jpg' />";
  }

  setToCompleted(){
    document.getElementById('table'+this.props.row+this.props.col).innerHTML="";
  }

  render() {
    let i = this.props.row;
    let j = this.props.col;
    let item = this.props.value;
    let tdstyle= {height:121, width:96};
    return (
      <td key={j} id={"table"+i+j} style={tdstyle} onClick={() => this.props.click(this,item, i ,j)}><img src="/images/card.jpg" /></td>
    );
  }
}

item.propTypes ={
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired,
  value: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
}