import React, {useContext} from "react";
import {Context} from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem ({item}) {
    const {removeFromCart} = useContext(Context);
    const [binIconHovered, binIconRef] = useHover();
    const binIcon = binIconHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    
    return (
        <div className="cart-item">
        <i 
            className={binIcon}
            onClick={() => removeFromCart(item.id)}
            ref={binIconRef}    
        >
        </i>
        <img src={item.url} width="130px" alt={item.id} />
        <p>$5.99</p>
    </div>
    );
}

CartItem.protoTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
    })
}
export default CartItem;