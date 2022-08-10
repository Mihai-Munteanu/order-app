import React, { useContext, useEffect, useState } from "react";
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
     const [btnIsHighlighted, setBtnIsHigligted] = useState(false);
     const cartCtx = useContext(CartContext);
     const { items } = cartCtx;


     const numberCartNumber = items.reduce((curNumber, item) => {
          return curNumber + item.amount;
     }, 0);

     const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`


     useEffect(() => {
          if (items.length === 0) {
               return;
          }

          setBtnIsHigligted(true);

          const timer = setTimeout(() => {
               setBtnIsHigligted(false);
          }, 300);

          return () => {
               clearTimeout(timer);
          };

     }, [items]);

     return <button className={btnClasses} onClick={props.onClick}>
          <span className={classes.icon}>
               <CartIcon />
          </span>
          <span>
               Your card
          </span>
          <span className={classes.badge}>
               {numberCartNumber}
          </span>
     </button>
}

export default HeaderCartButton;