import React from 'react';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleData(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <Navbar getData={(inputValue) => this.handleData(inputValue)} />
        <Cards filter={inputValue} />
        <Footer />
        
      </>
    );
  }
}

export default App;
