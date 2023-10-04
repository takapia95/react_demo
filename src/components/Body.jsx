import React, {Component} from "react";

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    render(){
        const increment = () => {
            console.log('made it')
            let currentCount = this.state.count +1
            this.setState({count: currentCount})
        }
        return(
            <button type="button" class="btn btn-dark" onClick={increment}>
                {this.state.count}
            </button>
        )
    }
}

export default Body;