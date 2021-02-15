import React, { Component } from 'react'
import Home from '../pages/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ImageDetails from '../pages/ImageDetails'
import ImagePage from '../pages/Imagepage'

export class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                <switch>
               
                <Route path ="/" component={Home}exact/>
                <Route path ="/imagepage"component={ImagePage}exact/>
                <Route path ="/imagedetails"component={ImageDetails}exact/>
                </switch>

                </Router>
            </div>
        )
    }
}

export default Routing
