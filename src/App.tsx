// React Router
import { Routes, Route } from "react-router-dom";
// Pages
import { Home, RootLayout, SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* Root */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
