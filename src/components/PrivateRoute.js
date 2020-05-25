import React,{Component} from 'react';
import {Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {

    render() {
        const Compo = this.props.component
        return(
            <Route
                render={ (rest) =>
                this.props.isLogged ? <Compo path={this.props.path} { ...rest } /> :
                <Redirect
                    to={{pathname : '/login', state : { from : "/"}}}
                />
                }
            />

        )
    }
}

export default PrivateRoute