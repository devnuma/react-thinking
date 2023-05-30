import { useState } from "react";
import { Product } from "./ProductRow";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export function FilterableProductTable(props: IFilterableProductTable) {
  const { products } = props;
  const [filter, setFilter] = useState("");
  const [inStock, setInStock] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filter}
        inStock={inStock}
        onFilterChange={setFilter}
        onInStockChange={setInStock}
      />
      <ProductTable products={products} filterText={filter} inStock={inStock} />
    </div>
  );
}

export interface IFilterableProductTable {
  products: Product[];
}
