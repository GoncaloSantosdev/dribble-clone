// React Query
import { useQuery } from "@tanstack/react-query";
// Services
import { getPost } from "../../services/apiPosts";
// Components
import { Button } from "../../components";
// React Icons
import { IoIosHeart } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();

  const { isLoading, data: post } = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(id),
  });

  console.log(post);

  return (
    <section className="w-full">
      <div className="container mx-auto w-full mt-8 px-4 lg:px-0">
        {/* USER - TOP */}
        <div className="lg:w-[60%] mx-auto flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row sm:items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full bg-cover cursor-pointer"
              src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <div>
              <h2 className="font-semibold">{post?.title}</h2>
              <span>{post?.author}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button icon={<CiBookmark />}>Save</Button>
            <Button icon={<IoIosHeart />} primary>
              Like
            </Button>
          </div>
        </div>
        {/* PROJECT - BOTTOM */}
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="mt-12">
            <img
              src={post?.image}
              alt="project"
              className="rounded-lg h-[60vh] w-full object-cover bg-cover bg-center"
            />

            <div className="mt-8 lg:w-[60%] mx-auto">
              <p>{post?.content}</p>

              <div className="flex items-center justify-center mt-8">
                <a
                  href={post?.githubLink}
                  target="_blank"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Github Repository
                </a>
              </div>
            </div>
          </div>
        )}
        <hr className="mt-8" />
        {/* RELATED PROJECTS - BOTTOM */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>POST</div>
          <div>POST</div>
          <div>POST</div>
          <div>POST</div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
