export function ProductRow(props: IProductRow) {
  const { product } = props;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface IProductRow {
  product: Product;
}
