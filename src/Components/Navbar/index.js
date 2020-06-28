import React from 'react'
import './style.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <div className='navBar'>
                <span className='text'>ARGENTINIAN START UP</span>
                <input className='input' type='text' placeholder='Search..' onChange={(e) => this.handleChange(e)} />
                <p>{this.state.inputValue}</p>
                <span className='addStartUp'>Add Start up</span>
            </div>
        )
    }
}
export default Navbar 