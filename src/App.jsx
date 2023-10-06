
import Product from "./components/Product"
import "slick-carousel/slick/slick.css";
import Test from "./components/Test"
import RootLayouts from "./components/RootLayouts"

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage"
import Signup from "./pages/Signup"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<RootLayouts />}
      >
        <Route
          path="/"
          element={<Test />}
        ></Route>
        <Route
          path="/my"
          element={<Product />}
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
