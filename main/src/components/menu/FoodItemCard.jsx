function FoodItemCard() {
  const description =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <img
          src="https://th.bing.com/th/id/R.2f0e2dd91e42edc72e37ee8d5a76fef4?rik=02n2BqqZBedvpg&riu=http%3a%2f%2fwww.thepkpway.com%2fwp-content%2fuploads%2f2016%2f02%2frestaurant-style-mexican-rice-7a.jpg&ehk=Q7EolVdIh1zJ3JjvbzII8Y5bCXGvW9l9b%2fYmUap48xQ%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          height={150}
          width={260}
        />
      </div>
      <div className="card-body ">
       <div className="row">
         <p className="col-8" >Food Item Name</p>
         <p className="col-4  text-danger">4.5</p>
       </div>
       <div className="row mt-2">
          <p className="col-8" style={{ color: "gray" }}>Rice</p>
          <h5 className="col-4">$6.5</h5>
       </div>
       <div className="row mt-3">
         <p className="card-text" style={{ fontSize: "14px", color: "gray" }}>
          {description.split(" ").slice(0, 10).join(" ")}
            {description.split(" ").length > 10 && "..."}
         </p>
       </div>
       <div className="row mt-2">
         <button className="btn ">Add to Cart</button>
       </div>
      </div>
    </div>
  );
}

export default FoodItemCard;
