import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';
class MessageContainer extends Component {
    render() {
        var {message} = this.props
        return (
            <Message message={message}/>
        );
    }
   
}

MessageContainer.propTypes ={
    message: PropTypes.string.isRequired
}


const mapSateToProp=state=>{
    return{
        message:state.message
    }
}
const mapDispatchToProp=(dispatch,props)=>{
    return{
        
    }
}
export default connect(mapSateToProp,mapDispatchToProp)(MessageContainer);