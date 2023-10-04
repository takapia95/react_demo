import React, {useState} from 'react';
import App from '../App';

function BodyHooks(){
    const [count,  setCount] = useState(0)

    return(
        <button type="button" className="btn btn-dark" onClick={() => setCount(count +1)}>
        {this.state.count}
        </button>

    )

}

export default BodyHooks; 