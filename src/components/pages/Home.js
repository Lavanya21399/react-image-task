import React, { Component } from 'react'

export class Home extends Component {
    move = () =>{
        this.props.history.push("/Imagepage")
    }
    render() {
        return (
            <div>
                <button onClick={this.move}>TakeMeToImage</button>
            </div>
        )
    }
}

export default Home