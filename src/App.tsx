// React Router
import { Routes, Route } from "react-router-dom";
// Pages
import { AuthLayout, Home, RootLayout, SignIn, SignUp } from "./pages";

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
      </Route>
    </Routes>
  );
};

export default App;
