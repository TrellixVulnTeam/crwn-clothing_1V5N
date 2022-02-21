import React from "react";

import {ReactComponent as ShoppingIcon}from '../../assets/shopping-bag.svg';

import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss';

const CartIcon = ({toogleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
        
    </div>
);
const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);