import React from 'react';
import './header.css';

export interface HeaderProps {
  user?: {};
}

export const Header: React.FC<HeaderProps> = () => (
  <header>
    <div className="wrapper">
      <div>
        <h1 className="site-title">Chefs Hub</h1>
      </div>
    </div>
  </header>
);
