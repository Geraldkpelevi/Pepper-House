import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import { getAllMenus } from "./menuService";
function MenuCategories() {
  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    getAllMenus((data) => {
      // console.log("Received:", data);
      setMenuCategories(data);
    });
  }, []);

  return (
    <div className="container my-5 d-flex justify-content-evenly flex-wrap gap-4">
      {Array.isArray(menuCategories) &&
        menuCategories.map(({ menuImage, menuName }) => (
          <MenuCategory
            key={menuName}
            menuImage={menuImage}
            menuName={menuName}
          />
        ))}
    </div>
  );
}

export default MenuCategories;
