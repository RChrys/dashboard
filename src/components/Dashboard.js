import React, { Component } from 'react';
import {Link } from "react-router-dom";
import datas from "./../datas/datas"


class Dashboard extends Component {

    render() {
        return(
            <div className="Dashboard">
               <h1>Home Dashboard</h1>
               <p>Bienvenue sur le Dasboard</p>
               <div className="posts">
               {
                   datas.map((data, i) => (
                        <li key={i}>
                            <Link to={`/post/${data.id}`}>
                                {data.title}
                            </Link>
                        </li>  
                    ) )
               }
               </div>
            </div>
        )
    }
}

export default Dashboard