// React Query
import { useQuery } from "@tanstack/react-query";
// API
import { getPosts } from "../services/apiPosts";
// Components
import { PostCard } from ".";

const Posts = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <section className="w-full">
      <div className="container mx-auto w-full mt-4 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <div className="w-full">
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            {data?.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Posts;
