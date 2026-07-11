import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/add-products/AddProduct.jsx";
import Categories from "../components/categories/Categories";
import Customers from "../components/customers/Customers";
import HomeItems from "../components/home-items/HomeItems";
import Menus from "../components/menus/Menus";
import Orders from "../components/orders/Orders";
import UpdateProducts from "../components/update-products/UpdateProducts";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeItems />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/update-products" element={<UpdateProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
