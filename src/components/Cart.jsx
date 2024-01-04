import React from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((item) => (
            <Dropdown.Item>{item.product.name}</Dropdown.Item>
          ))}
          <Dropdown.Menu />
          <Dropdown.Item>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
