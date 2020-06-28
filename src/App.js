import React from 'react';
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar />
        <Cards />
        <h5>Made with ♥ by <a href='https://twitter.com/lalilunar'>lalilunar</a></h5>

      </div>
    );
  }
}
 

export default App;
