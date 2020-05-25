import React, { Component } from 'react';
import {Redirect } from "react-router-dom";

class Home extends Component {

    render() {
        return(
            this.props.isLogged ? <Redirect to={{pathname : '/dashboard', state : { from : "/"}}}/> : <Redirect to={{pathname : '/login', state : { from : "/"}}}/>
        )
    }
}

export default Home