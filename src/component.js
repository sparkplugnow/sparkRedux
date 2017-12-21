// imports and modules
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {action, reaction} from './actionCreator';
// parent component
class App extends React.Component{
    render(){
        return(             
        <div>
    <button onClick = {()=>this.props.action()}>CLICK ME</button>
    <button onClick = {()=>this.props.reaction()}>LIKE</button>
        </div>
        )
    }
    }
    // connecting to redux 
    function mapStateToProps(state){
    return {
         user:state.user
    }
    }

    function mapDispatchToProps(dispatch){
       return bindActionCreators({action:action,
    reaction:reaction},dispatch)
    }
   export default connect(mapStateToProps, mapDispatchToProps)(App);
