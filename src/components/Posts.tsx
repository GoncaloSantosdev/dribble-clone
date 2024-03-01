// Components
import { PostCard } from ".";

const Posts = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto w-full mt-4 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};

export default Posts;
