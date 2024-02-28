// Data
import { filtersData } from "../data";

const Filters = () => {
  return (
    <div>
      <div className="container mx-auto py-8 px-4 xl:px-8 flex items-center justify-between">
        <button className="border rounded px-4 py-2 text-sm">Following</button>
        <div className="flex gap-x-8">
          {filtersData.map((item, index) => (
            <li key={index} className="list-none text-sm">
              {item.title}
            </li>
          ))}
        </div>
        <button className="border rounded px-4 py-2 text-sm">Filters</button>
      </div>
    </div>
  );
};

export default Filters;
