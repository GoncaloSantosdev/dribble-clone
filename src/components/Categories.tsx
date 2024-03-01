// Data
import { categoryFilters } from "../data";

const Categories = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto py-6 px-4 lg:px-0 flex items-center justify-between">
        <div className="flex gap-x-8 overflow-auto">
          {categoryFilters.map((item, index) => (
            <button
              key={index}
              className="list-none text-sm cursor-pointer whitespace-nowrap capitalize"
            >
              {item}
            </button>
          ))}
        </div>
        <button className="border rounded px-4 py-2 text-sm">Filters</button>
      </div>
    </section>
  );
};

export default Categories;
