import React, { Component } from 'react';
import datas from "./../datas/datas"

class Post extends Component {

    render() {
        const {params} = this.props.computedMatch
       // const post = datas.filter(data => data.id === parseInt(params.id))
      
        return(
            <div className="Post">
                <h1>Post</h1>
                {datas.map((data, i) => {
                    if(data.id === parseInt(params.id) ){
                        return (
                            <div key={i}>
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                            </div>
                        )
                    }
                    else return null
                    })}
            </div>
        )
    }
}

export default Post