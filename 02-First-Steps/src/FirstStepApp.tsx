import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "PlayStation 5", quantity: 2 },
  { productName: "Xbox Series X", quantity: 3 },
];

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>
      {itemsInCart.map(({ productName, quantity }: ItemInCart) => (
        <ItemCounter
          key={productName}
          itemName={productName}
          itemQuantity={quantity}
        />
      ))}
    </>
  );
}
