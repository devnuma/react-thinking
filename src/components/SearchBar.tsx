export function SearchBar(props: ISearchBar) {
  const { filterText, inStock, onFilterChange, onInStockChange } = props;
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

export interface ISearchBar {
  filterText: string;
  inStock: boolean;
  onFilterChange: (value: string) => void;
  onInStockChange: (value: boolean) => void;
}
