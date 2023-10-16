import React, {Component} from "react";
import axios from "axios";

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
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
        const increment = () => {
            this.setState({count: this.state.count +1})
        }
        return(
            <>
                <button type="button" class="btn btn-dark" onClick={increment}>
                    {this.state.count}
                </button>
                <div class="container">
                <div class="row">
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    Column
                    </div>
                </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>
                        {photo.title}
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
                <div style={{ marginTop: "20px" }}>
                    <p>
                        {photo.date}
                    </p>
                </div>
            </>
        )
    }
}

export default Body;