import React from 'react';
import Navbar from '../Components/Navbar';
import styles from './styles.css';



class Add extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            logo: '',
            mail: '',
            description: '',
            web: '',
            twitter: '',
            instagram: '',
            isOk: '',
            showMessage: false
        }
    }

    handleChange(e) {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target

        this.setState({
            [name]: value
        });
    }

    handleClick() { //valida la completitud de los campos. 
        //Desestructuro el estado
        const { name, email, logo, description } = this.state;

        const isValid = name && email && logo && description ? true : false;

        this.setState({
            isOk: isValid,
            showMessage:true
        })

        //another way of doing it:
        // if (name && email && logo && description) {
        //     console.log('FUNCIONA')
        //     this.setState({
        //         isOk: true,
        //         showMessage: true
        //     })

        // } else {
        //     console.log('NO FUNCIONA')
        //     this.setState({
        //         isOk: false,
        //         showMessage:true
        //     })

        // }



    }



    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='inputWrapper'>
                    {this.state.showMessage && (
                        <p>{this.state.isOk ? "Everything went well!" : "Something went wrong"}</p>
                    )}
                    <input type='text' name='name' placeholder='Name' onChange={(e) => this.handleChange(e)} />
                    <input type='text' name='logo' placeholder='Logo' onChange={(e) => this.handleChange(e)} />
                    <input type='text' name='email' placeholder='Mail' onChange={(e) => this.handleChange(e)} />
                    <input type='text' name='description' placeholder='Description' onChange={(e) => this.handleChange(e)} />
                    <input type='text' name='web' placeholder='Web' onChange={(e) => this.handleChange(e)} />
                    <input type='text' name='twitter' placeholder='Twitter' onChange={(e) => this.handleChange(e)} />
                    <input type='text' name='instagram' placeholder='Instagram' onChange={(e) => this.handleChange(e)} />
                    <button className='addButton' onClick={() => this.handleClick()} >send</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Add