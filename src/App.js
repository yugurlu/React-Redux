import { Button, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/actions/cartActions";

function App() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const products = [
    {
      name: "iPhone 15",
      price: 50000,
    },
    {
      name: "iPhone 12",
      price: 20000,
    },
    {
      name: "Macbook Air",
      price: 30000,
    },
    {
      name: "Airpods",
      price: 5000,
    },
  ];

  return (
    <>
      <Cart />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(product)}>
                  Sepete Ekle
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default App;
