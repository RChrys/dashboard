import React,{Component} from 'react';
import {Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {

    render() {
        const Compo = this.props.component
        return(
            <Route
                path={this.props.path}
                render={ (rest) =>
                this.props.isLogged ? <Compo { ...this.props } /> :
                <Redirect
                    to={{pathname : '/login', state : { from : "/"}}}
                />
                }
            />

        )
    }
}

export default PrivateRoute