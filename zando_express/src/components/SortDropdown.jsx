import { useProducts } from "../context/ProductsContext";

export const SortDropdown = () => {
  const { sortProducts } = useProducts();

  const handleSortChange = (e) => {
    const value = e.target.value; // "title-asc", "price-desc", etc
    const [sortBy, order] = value.split("-");
    sortProducts(sortBy, order);
  };

  return (
    <select onChange={handleSortChange} className="border px-2 py-1 rounded">
      <option value="title-asc">Title Ascending</option>
      <option value="title-desc">Title Descending</option>
      <option value="price-asc">Price Low → High</option>
      <option value="price-desc">Price High → Low</option>
    </select>
  );
};
