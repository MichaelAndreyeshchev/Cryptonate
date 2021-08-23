import React, { useState } from 'react';
import NavCSS from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/styles';



const Navigation = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul className="campaign__navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portalpage">Portal</Link>
        </li>
        <li>
          <Link to="/CreateCampaign">CreateCampaign</Link>
        </li>
        <li>
          <Link to="/specificdonation">Donations</Link>
        </li>
        <li>
          <Link to="/donationlisst">Donation List</Link>
        </li>
        <li>
          <Link to="/teampage">Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        {isAuthenticated && (
            <div className="profile__image" style={{ float: 'right' }}>
              <a className="profile__info" href="/accountinfo">
                <img src={user.picture} alt={user.name} />
              </a>
            </div>
        )}
          {!isAuthenticated && (
            <button className="login" onClick={() => loginWithRedirect()} style={{ float: 'right' }}>Login</button>
          )}

        {isAuthenticated && (
            <button className="logout" onClick={() => logout({ returnTo: window.location.origin })} style={{ float: 'right' }}>Logout</button>
          )}

      </ul>
    </nav>
  );
};

export default Navigation;
