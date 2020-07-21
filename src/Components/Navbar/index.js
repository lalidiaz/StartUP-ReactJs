import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
    handleChange(e) {
      const inputValue = e.target.value;
      const { getData } = this.props;
  
      getData(inputValue);
    }
  
    render() {
      return (
        <nav className="navBar">
            <h1>ECO Friendly Startups</h1>
            <input className='inputNav'
              onChange={(e) => this.handleChange(e)}
              type=""
              placeholder="Buscar startup"
            />
          <Link to='/Add'>
          <button className='addStartUp'>Add Startup</button>
          </Link>
          
        </nav>
      );
    }
  }
  
  export default Navbar;