import React, { Fragment } from "react";
import mealsImage from '../../assets/meals.jpeg';

import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCartButton";

const Header = props => {
     return <Fragment>
          <header className={classes.header}>
               <h1>ReactMeal</h1>
               <HeaderCardButton onClick={props.onShowCart} />
          </header>
          <div className={classes['main-image']}>
               <img src={mealsImage} alt="table full of delicious food" />
          </div>

     </Fragment >
}

export default Header;