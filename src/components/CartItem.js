import React, {useContext, useState} from "react";
import {Context} from "../Context";

function CartItem ({item}) {
    const {removeFromCart} = useContext(Context);
    const [binIconHovered, setBinIconHovered] = useState(false);

    function binIcon() {
        return binIconHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    }

    return (
        <div className="cart-item">
        <i 
            className={binIcon()}
            onClick={() => removeFromCart(item.id)}
            onMouseEnter={() => setBinIconHovered(true)}
            onMouseLeave={() => setBinIconHovered(false)}>
        </i>
        <img src={item.url} width="130px" alt={item.id} />
        <p>$5.99</p>
    </div>
    );
}

export default CartItem;