import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";

// Create router with the new v7 API
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordForm />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;