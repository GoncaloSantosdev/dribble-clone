// React Router
import { Routes, Route } from "react-router-dom";
// Pages
import {
  AuthLayout,
  Home,
  PostDetails,
  RootLayout,
  SignIn,
  SignUp,
  UserProfile,
} from "./pages";

const App = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      {/* Root */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        {/* User Profile */}
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
