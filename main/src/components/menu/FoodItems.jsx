import FoodItemCard from "./FoodItemCard";
function FoodItems() {
  return (
    <div className="container my-5 d-flex justify-content-evenly flex-wrap gap-4">
      <FoodItemCard />
      <FoodItemCard />
      <FoodItemCard />
      <FoodItemCard />
      <FoodItemCard />
      <FoodItemCard />
    </div>
  );
}

export default FoodItems;
