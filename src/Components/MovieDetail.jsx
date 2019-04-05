import React,{Component} from 'react'
import SlideShow from './Slideshow'
import { movieStore } from '../moviesList';
import Header from './Header';

const MovieDetail = (props)=>{
    const {movieName} = props.match.params;
    const movie = movieStore.find((movie)=>(movie.name==movieName));
    return(
        <div className="movie-detail-div">
        <Header/>
            <SlideShow>
                {movie.slideshowImages}
            </SlideShow>
            <div className="description-div">
                <span className="title">{movieName}</span>
                <div className="subtitle">{movie.subtitle}</div>
                <div className="director-div">Directed By :{movie.director}</div>
                <div className="plot-summary-div">{movie.description}</div>
            </div>
        </div>
    )
}

export default MovieDetail;
