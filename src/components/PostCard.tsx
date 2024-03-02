// React Router
import { Link } from "react-router-dom";
// React Icons
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const PostCard = () => {
  return (
    <div>
      <Link to={"/post/1"}>
        <img
          src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="work"
          className="rounded-xl w-full cursor-pointer"
        />
      </Link>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-x-2">
          <img
            className="w-8 h-8 rounded-full bg-cover cursor-pointer"
            src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <span className="font-semibold text-sm">Username</span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <IoIosHeartEmpty className="cursor-pointer" />
            <span className="text-sm">124</span>
          </div>
          <div className="flex items-center gap-1">
            <IoEyeOutline className="cursor-pointer" />
            <span className="text-sm">124</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
