import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Slideshow extends Component{
    constructor(props){
        super(props);
        this.state = {
            total:0,
            currentSlide:0
        }
    }
    componentDidMount(){
        let {children} = this.props;
        this.setState({total:children.length});
        this.slideInterval = setInterval(this.showNext,3000);
    }
    componentWillUnmount(){
        clearInterval(this.slideInterval);
    }
    showNext = ()=>{
        this.setState((prevState)=>
              { return {currentSlide :(prevState.currentSlide+1==prevState.total)?0:prevState.currentSlide+1}});
    }
    render(){
        const {children} = this.props;
        const currIndex = this.state.currentSlide;
        let imageUrl = '../'+children[currIndex];
        const bullets = Array(this.state.total).fill('○');
        bullets[currIndex] = '●';
        console.log(imageUrl)
        return (
            <div className="slides-div">
                <img src = {imageUrl} alt={imageUrl}/>
                <div className='slideshow-bullets-div'>{bullets}</div>
            </div>
        )
    }
}

Slideshow.propTypes = {
    children:PropTypes.object.isRequired
}
export default Slideshow;