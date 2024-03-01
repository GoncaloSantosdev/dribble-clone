// React router
import { Link } from "react-router-dom";
// Data
import { navLinks } from "../../data";
// Icons
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto py-4 px-4 lg:px-0 flex items-center justify-between">
        <div className="flex items-center">
          <LuMenu className="lg:hidden" size={24} />
          <Link to={"/"}>
            <h1 className="text-2xl ml-4 lg:ml-0">Dribble</h1>
          </Link>
          <nav className="hidden xl:flex gap-8 ml-12">
            {navLinks.map((item, index) => (
              <li className="list-none" key={index}>
                <Link to={"/"} className="text-sm">
                  {item.title}
                </Link>
              </li>
            ))}
          </nav>
        </div>
        <div className="space-x-4 flex items-center">
          <span className="text-sm text-[#9747FF] hidden lg:block">
            Apply Now
          </span>
          <input
            type="search"
            placeholder="Search"
            className="border rounded text-sm px-4 py-2 bg-gray-200 placeholder:text-black w-[180px] hidden md:block"
          />
          <img
            className="w-10 h-10 rounded-full bg-cover cursor-pointer"
            src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <button className="bg-[#9747FF] text-white px-4 py-2 rounded text-sm">
            Upload
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
