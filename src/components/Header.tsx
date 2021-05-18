import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export interface HeaderProps {
  user?: {};
}

export const Header: React.FC<HeaderProps> = () => (
  <header>
    <div className="wrapper">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </div>
    </div>
  </header>
);
