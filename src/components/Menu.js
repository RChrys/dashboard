import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return(
            <div className="Menu">
                <ul>
                    {this.props.children.map((child,k) => 
                        <li key={k}>{child}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Menu