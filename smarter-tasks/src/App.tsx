import "./App.css";
import { Navigate,createBrowserRouter,RouterProvider } from "react-router-dom";
// import TaskApp from "./TaskApp";

import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute";
// function App() {
//   return (
//     <div className="App">
//       <TaskApp />
//     </div>
//   );
// }
const router = createBrowserRouter([
  {
    path:"/",
    element:<Navigate to="/signin" replace/>
  },
  {
    path : "/signin",
    element:<Signin/>
  },
  {
    element: (
      
         <Layout />
             

    ),
    children: [
      {
        path: "home",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path:"tasks/:id",
        element:(<TaskDetailsPage/>)
      },
      {
        path:"notfound",
        element:<NotFound/>
      },
      {
        path:"*",
        element:<Navigate to="/notfound" replace/>
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App
