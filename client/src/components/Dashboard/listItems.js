import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Dashboard from './Dashboard';
import CompanyButton from '../button/Button';
import { Link } from 'react-router-dom';
import Style from './style.css';



export const mainListItems = (
  <div>
    <ListItem>
      <ListItemIcon>
        <DashboardIcon className="iconColor" />
      </ListItemIcon>
      <Link  className="linkColor" to="/dashboard">Dashboard</Link>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <LoyaltyIcon className="iconColor" />
      </ListItemIcon>
      <Link  className="linkColor" to="/favorites">Manage Favorites</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon className="iconColor" />
      </ListItemIcon>
      <Link  className="linkColor" to="/profile">Profile</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SearchIcon className="iconColor" />
      </ListItemIcon>
      <Link  className="linkColor" to="/search">Search</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon className="iconColor" />
      </ListItemIcon>
      <Link  className="linkColor" to="/">Logout</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CastForEducationIcon className="iconColor" />
      </ListItemIcon>
      <Link  className="linkColor" to="/definitions">Definitions</Link>
    </ListItem>
    <CompanyButton />
  </div>

);