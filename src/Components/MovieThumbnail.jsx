import React,{Component} from 'react'

import {Link} from 'react-router-dom'
class MovieThumbnail extends Component{


    render(){
        const posterImg = "../Images/thumbnails/"+this.props.movie.imageUrl+".jpg";
        const linkUrl = '/movie='+this.props.movie.name;
        return (
            <div className="thumbnail">
                <Link className="thumbnail-link" to={linkUrl}>
                    <img className="thumbnail-img" src={posterImg} alt="poster"/>
                    <span className = "thumbnail-title">{this.props.movie.name}</span>
                </Link>
            </div>
        );
    }
}

export default MovieThumbnail;