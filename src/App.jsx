
import Product from "./components/Product"
import "slick-carousel/slick/slick.css";
import RootLayouts from "./components/RootLayouts"

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage"
import Signup from "./pages/Signup"
import Shop from "./pages/Shop";
import Home from "./pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<RootLayouts />}
      >
        
        <Route
          path="/"
          element={<Home/>}
        ></Route>
        <Route
          path="/shop"
          element={<Shop/>}
        ></Route>
        <Route
          path="/sign-up"
          element={<Signup />}
        ></Route>
        <Route
          path="*"
          element={<ErrorPage />}
        ></Route>
      </Route>
      
    </Route>
  )
);



function App() {

  

  
  return (
<>

<RouterProvider router={router} />
    
</>    
  )
}

export default App
