// React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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

const queryClient = new QueryClient({
  defaultOptions: {},
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
