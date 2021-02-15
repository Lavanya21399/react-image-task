import React, { Component } from 'react'
import Imagepage from '../pages/Imagepage'

export class ImageDetails extends Component {
    render() {
        const {title,thumbnailUrl}=this.props.location.state;

        return (
            <div>
                <li>
                    {title}
                </li>
                <li>
                  <img src = {thumbnailUrl} alt="info"/>
                </li>
                
            </div>
        )
    }
}

export default ImageDetails
