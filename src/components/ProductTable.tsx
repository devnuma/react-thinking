import { ProductCategoryRow } from "./ProductCategoryRow";
import { Product, ProductRow } from "./ProductRow";

export function ProductTable(props: IProductTable) {
  const { products, filterText, inStock } = props;
  const rows: React.ReactElement[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export interface IProductTable {
  products: Product[];
  filterText: string;
  inStock: boolean;
}
