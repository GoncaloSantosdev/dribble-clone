import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <section className="w-full md:w-[50%]">
        <Outlet />
      </section>
      <div className="w-full hidden md:block md:w-[50%]">
        <img
          src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-[100vh] object-cover bg-cover bg-center"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
