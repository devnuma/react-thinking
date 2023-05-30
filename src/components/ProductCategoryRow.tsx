export function ProductCategoryRow(props: IProductCategoryRow) {
  const { category } = props;
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

export interface IProductCategoryRow {
  category: string;
}
