// React Router
import { Outlet } from "react-router-dom";
// Components
import { Header } from "../../components";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
