import React, {Component} from "react";
import axios from "axios";

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            //count: 0,
            photo: {}
        }
    }

    componentDidMount(){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=QTHgvholt8dHdnv0yX3oamNKyWAneDSxLP2yh6UD')
        .then((response) => {
            this.setState({photo: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        const {photo} = this.state
        //const increment = () => {
            //this.setState({count: this.state.count +1})
 //       }                 <button type="button" class="btn btn-dark" onClick={increment}> {this.state.count} </button>
        return(
            <>
                <div class="container">
                <div class="row">
                    <div class="col">
                    {photo.title}
                    </div>
                    <div class="col">
                    {photo.copyright}
                    </div>
                    <div class="col">
                    {photo.date}
                    </div>
                </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>
                        {photo.url}
                    </p>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <img src={photo.url} alt={photo.title} height={400} width={500}/>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>
                        {photo.explanation}
                    </p>
                </div>

            </>
        )
    }
}

export default Body;