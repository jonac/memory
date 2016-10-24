import React, { Component } from 'react';
import classnames from 'classnames';


export default class item extends Component {
  constructor(props){
    super(props);
    this.state = {toggled: false, complete: false}
  }

  clickHandler(val, row, col){
    if (!this.state.complete) {
      if (Session.get("picked")) {
        // TODO kolla om det är samma element
        document.getElementById('table'+row+col).innerHTML=val;
        if(Session.equals('pickedValue', val)){
          score = Session.get("score")+1;
          Session.set("score",score);
          document.getElementById('table'+row+col).innerHTML="";

        }
      } else {
        document.getElementById('table'+row+col).innerHTML=val;
        Session.set("pickedValue",val)
        Session.set("picked",true)
      }
      console.log(Session.keys)
      
      this.setState({toggled: true});
    }
  }

  render() {
    let i = this.props.row;
    let j = this.props.col;
    let item = this.props.value;
    let tdstyle= {height:121, width:96};
    let classes = classnames({toggled: this.state.toggled});

    return (
      <td key={j} id={"table"+i+j} className={classes} style={tdstyle} onClick={() => this.clickHandler(item,i,j)}><img src="/images/card.jpg" /></td>
    );
  }
}

item.propTypes ={
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired,
  value: React.PropTypes.string.isRequired,
}