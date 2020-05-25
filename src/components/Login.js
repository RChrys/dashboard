import React, { Component } from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";
import credentials from "./credentials"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userValue : "",
            mdpValue : "",
            error : ""
        }
        if(props.location.pathname === "/logout"){
            this.logout()
        }


    }

    handleChange = (event) => {
        const { type, value } = event.target

        if(type==="text"){
            this.setState({
                userValue: value
            })
        }
        else if(type==="password"){
            this.setState({
                mdpValue: value
            })
        }
    }

    login = (event) => {
        event.preventDefault();
        if(this.state.userValue === credentials.userValue && this.state.mdpValue === credentials.mdpValue){
            localStorage.setItem('userToken',this.state.userValue)
            this.props.log(true)
            this.setState({
                error : ""
            })
        }
        else {
            this.setState({
                error : "Mauvais User ou mauvais mot de passe"
            })
        }
    }

    logout = () => {
        localStorage.removeItem('userToken')
        this.props.log(false)
    }
    

    render() {
        
        if(this.props.isLogged === true)
        {
            return(<Redirect
                to={{pathname : '/', state : { from : "/login"}}}
            />)
        } 
        else {
            
            return(
                
                <div className="Login">
                   <form onSubmit={this.login}>
                        <div className="form-group">
                            <label>User : </label>
                            <input type="text" className="form-control" placeholder="Enter user" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Valider</button>
                        {this.state.error}
                    </form>
                </div>
            )
        }
       
    }
}

export default Login