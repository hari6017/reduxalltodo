import React from 'react';
import ReactDom from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {additem} from '../actions/Addtodo.js';

class Left extends React.Component{
  handleclick1(){
    var item = ReactDom.findDOMNode(this.refs.myInput).value;
    ReactDom.findDOMNode(this.refs.myInput).value='';
    this.props.Add(item);
  }

  render(){

    return(
      <div>
        <h1>TodoList</h1>
        Item:<input type = "text" ref="myInput" />
        <input type = "button" value = "Click it" onClick= {()=>{this.handleclick1()}} />
<hr />
      </div>
    );
  }
}

function MatchDispatchToProps(dispatch){
  return bindActionCreators({Add : additem}, dispatch)
}



export default connect(state=>({}),MatchDispatchToProps)(Left);
