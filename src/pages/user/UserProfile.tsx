// Components
import { Button, PostCard } from "../../components";
// React Icons
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Tab } from "@headlessui/react";

const UserProfile = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto w-full mt-8 px-4 lg:px-0">
        <div className="flex justify-center md:justify-between items-center w-full">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img
              className="w-24 h-24 rounded-full bg-cover object-cover cursor-pointer"
              src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">Username</h2>
              <h2 className="text-3xl font-semibold mt-4">
                I’m UX/UI Designer at Microtech 👋
              </h2>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <Button icon={<IoIosAddCircleOutline />}>Follow</Button>
                <Button primary icon={<CiMail />}>
                  Hire Me
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="project"
              className="rounded-lg h-[60vh] w-full object-cover bg-cover bg-center shadow"
            />
          </div>
        </div>

        <div className="mt-12">
          <Tab.Group>
            <Tab.List className="flex gap-12 border-b-[0.1px] border-gray-300">
              <Tab className="flex items-center mb-4">Work</Tab>
              <Tab className="flex items-center mb-4">Followers</Tab>
              <Tab className="flex items-center mb-4">About</Tab>
            </Tab.List>
            <Tab.Panels className="mt-8">
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PostCard />
                  <PostCard />
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
