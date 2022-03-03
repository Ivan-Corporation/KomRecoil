import React from "react";
import { Link } from "react-router-dom";
import { RepositoryMetrics } from 'repository-metrics';

const Navbar = () => {
  return (
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i class="fas fa-store fa-2x"></i>
            <p>KomRecoil</p>
          </a>
        </div>
        
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              
                <Link to="/addProduct" class="button is-warning" href="#">
                  <strong>Add ✨</strong>
                </Link>
                
              </div>
              
            </div>
            <RepositoryMetrics 
                owner='Ivan-Corporation' 
                repo='komrecoil' 
                theme='light' 
              />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
