import FoodItems from "../../components/menu/FoodItems";
import MenuCategories from "../../components/menu/MenuCategories";
import MenusBanner from "../../components/menu/MenusBanner";
function Menu() {
  return (
    <div>
      <section>
        <MenusBanner />
      </section>
      <section>
        <MenuCategories />
      </section>
      <section>
        <FoodItems />
      </section>
    </div>
  );
}

export default Menu;
