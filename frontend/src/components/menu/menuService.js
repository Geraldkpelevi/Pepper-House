import axios from "axios";

export function getAllMenus(setMenuCategories) {
  axios.get("http://localhost:3000/api/menusCategories/getAllMenusCategories")
    .then((response) => {
      if (response.data.ok) {
        setMenuCategories(response.data.data);
      } else {
        // console.error("Failed to fetch menu categories:", response.data.message);
        setMenuCategories([]);
      }
    })
    .catch((error) => {
        console.error("Error fetching menu categories:", error);
        setMenuCategories([]);
    });
}
