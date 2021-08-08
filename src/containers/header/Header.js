import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core'

const Header = ({ totalItems }) => {
  return (
    <div className="ui fixed menu">
      <Link to='/'>
        <div className="ui container center">
          <h2>IvanovShop</h2>
        </div>
      </Link>
      <div>
        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
          <Badge badgeContent={totalItems} color='secondary'>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
