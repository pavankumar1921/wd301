// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import Signup from './pages/signup';
// import Signin from "./pages/signin";
// import Dashboard from "./pages/dashboard";
// import ProtectedRoute from "./ProtectedRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin",
//     element: <Signin/>,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <Dashboard/>
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: "*",
//     element: <Notfound />,
//   }
// ]);

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App
import {useContext} from "react";
import { RouterProvider } from "react-router-dom";
import {ThemeContext} from "./context/theme";
import router from "./routes"

import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

const App = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <ProjectsProvider>
        <MembersProvider>
        <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
}
export default App;