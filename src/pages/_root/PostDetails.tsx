// Components
import { Button, GithubButton } from "../../components";
// React Icons
import { IoIosHeart } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

const PostDetails = () => {
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
              <h2 className="font-semibold">Project - Project name</h2>
              <span>Username</span>
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
        <div className="mt-12">
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="project"
            className="rounded-lg h-[60vh] w-full object-cover bg-cover bg-center"
          />

          <div className="mt-8 lg:w-[60%] mx-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              facere sunt adipisci quasi magni, esse pariatur sed harum! Odit
              dolorum et earum nobis at quas non pariatur. Ea nesciunt quisquam
              aliquam, tempore vitae libero nemo totam quidem, architecto
              mollitia saepe iure fuga pariatur voluptates dolor. Ipsum expedita
              earum laudantium maiores perferendis nobis ad consequatur
              accusantium in? Autem fugit ducimus, consequatur possimus fuga
            </p>

            <div className="flex items-center justify-center mt-8">
              <GithubButton />
            </div>
          </div>
        </div>
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
