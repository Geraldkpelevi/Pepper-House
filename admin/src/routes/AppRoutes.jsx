import { Routes, Route } from "react-router-dom";
import Categories from "../components/categories/Categories";
import Orders from "../components/orders/Orders";
import HomeItems from "../components/home-items/HomeItems";
import Menus from "../components/menus/Menus";
import Customers from "../components/customers/Customers";
import UpdateProducts from "../components/update-products/UpdateProducts";
import AddProduct from "../components/add-products/AddProduct";
import AddItem from "../components/home-items/add-items/AddItem";
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
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default AppRoutes;