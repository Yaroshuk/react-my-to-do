import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/"><h1>My-To-Do</h1></Link>
      </div>
    );
  }
}

export default Header;