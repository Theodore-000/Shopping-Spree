import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import {
  Cart,
  Home,
  NotFound,
  ProductDetail,
  Signin,
} from "../pages/index.pages.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const AllRoutes = () => {
  return (
    <>
      <RouterProvider
        router={router}
        hydration={true}
        v7_partialHydration={true}
      />
    </>
  );
};

export default AllRoutes;
