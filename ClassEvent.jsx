import React, { Component } from 'react'
class Header extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Guest'
        }

        //this.onClickHandler = this.onClickHandler.bind(this)
    }

    // onClickHandler(){
    //     //console.log('Button clicked')
    //     this.setState({
    //         name: 'John'
    //     })
    //     console.log(this)
    // }

    onClickHandler = () => {
        //console.log('Button clicked')
        this.setState({
            name: 'John'
        })
        console.log(this)
    }

    render(){
        return(
            <div>
                <h1>Welcome { this.state.name }</h1>
                {/* 1st way */}
                {/* <button onClick={ this.onClickHandler.bind(this) }>Login</button> */}

                {/* 2nd way */}
                {/* <button onClick={ this.onClickHandler }>Login</button> */}

                {/* 3rd way */}
                {/* <button onClick={ () => this.onClickHandler() }>Login</button> */}

                {/* 4th way */}
                <button onClick={ this.onClickHandler }>Login</button>
            </div>
        )
    }
}
export default Header
