import React, { Component } from 'react';

class Osiem extends Component {
    state = {
        ile: 0,
        ma: 10
    }
    stan = (stan) => {
        if (stan === "minus")
            this.setState({
                ile: this.state.ile - 1,
                ma: this.state.ma + 1
            })
        else if (stan === "plus")
            this.setState({
                ile: this.state.ile + 1,
                ma: this.state.ma - 1
            })
    }

    render() {
        return (
            <>
                <button onClick={() => this.stan("minus")}>-</button>
                <h1>{this.state.ma ? this.state.ile : "nie ma"}</h1>
                <button onClick={() => this.stan("plus")}>+</button>
            </>
        );
    }
}




export default Osiem;