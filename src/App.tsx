// React Router
import { Routes, Route } from "react-router-dom";
// Pages
import { Home, SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* Root */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
