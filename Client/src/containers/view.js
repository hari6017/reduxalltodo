import React from 'react';
import ReactDom from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateitems} from '../actions/Addtodo.js'




 class View extends React.Component{




  render(){
    var completed = this.props.addlist.filter(user=>(user.Completed==true));
    var incompleted = this.props.addlist.filter(user=>(user.Completed==false));
    return(
      <div>
      {this.props.addlist.map(user=>(<li key = {user.id} onClick={()=>{this.props.Add(user)}}>{user.item}</li>))}
      <br></br>
      {completed.map(item=>(<li key = {item.id}>{item.item}</li>))}
<br></br>
{incompleted.map(item=>(<li key = {item.id}>{item.item}</li>))}
      </div>


    );
  }
}

function mapStateToProps(state)
{
  console.log(state.Add+"hari");
  return {
    addlist : state.Add}
}
function MatchDispatchToProps(dispatch){
  return bindActionCreators({Add : updateitems}, dispatch)
}
export default connect(mapStateToProps,MatchDispatchToProps)(View);
