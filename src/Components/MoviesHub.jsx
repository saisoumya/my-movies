import React,{Component} from 'react'
import { movieStore} from '../moviesList'
import MovieThumbnail from './MovieThumbnail'
import Header from './Header';

class MoviesHub extends Component{

    render(){
        return (
        <div className='div-main'>
            <Header/>
            {movieStore.map((movie)=>(
                <MovieThumbnail movie={movie} key= {movie.name}/>
            ))}
        </div>);
    }
}

export default MoviesHub;