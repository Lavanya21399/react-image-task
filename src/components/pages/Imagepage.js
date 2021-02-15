import React, { Component } from 'react'
import ApiFetch from '../config/Fetchapi'
import {Link} from 'react-router-dom'

export class Imagepage extends Component {
    constructor() {
        super()
    
        this.state = {
             photos:[],
             loading:true,
        }
    }

    componentDidMount = async () => {
        let apiValue = await ApiFetch();
        this.setState({ loading: false, photos: apiValue.data})
        console.log(this.state.photos)
    };
   
      
    
    render() {
        console.log(this.state.photos)
        const photos=this.state.photos;
        

        return (
            <div>
                <ul>
                    {this.state.photos.map((item)=>(
                    <Link to ={{pathname:"/ImageDetails",state:{
                        id:item.id,
                        title:item.title,
                        thumbnailUrl:item.thumbnailUrl,
                    }}}>
                        <li>
                            <img src ={item.url} alt="info"/>
                        </li>
                    </Link>
                    ))}
                </ul>

                
            </div>
        );
    }
}

export default Imagepage
