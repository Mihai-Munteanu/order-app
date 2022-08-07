import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from './HeaderCard.module.css';

const HeaderCardButton = (props) => {
     return <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}>
               <CartIcon />
          </span>
          <span>
               Your card
          </span>
          <span className={classes.badge}>
               3
          </span>
     </button>
}

export default HeaderCardButton;