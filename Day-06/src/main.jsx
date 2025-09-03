import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Protected, Login } from "./components/index.js"
import AllPost from "./pages/AllPost";
import Signup from "./pages/Signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
              <Login/>
          </Protected>
        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },

      {
        path: "/all-post",
        element: (
          <Protected authentication>
            <AllPost/>
          </Protected>
        )
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}> 
     <RouterProvider router={router}/>
  </Provider>
  </BrowserRouter>
)
