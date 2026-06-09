import Card from "./card/Card";
function InitialHome() {
  return (
    <> 
    <div>
      <div style={{ height: "550px" }} className="container">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.91rQUaTuFTTudYhz9zGEIQHaEJ?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
          width={"100%"}
          height={550}
        />
      </div>

      <div style={{ width: "100%" }} className="container my-3 mt-5 ">
        <div className="row">
          <h3>Satisfy your cravings on Pepper House</h3>
        </div>

        <div className="row mt-4">
          <div className="col-3">
            <Card
              img="https://i.pinimg.com/originals/15/5b/45/155b45face87ca124d7e39b5a6ad04f8.jpg"
              title="Veggie Burger"
            />
          </div>

          <div className="col-3">
            <Card
              img="https://tse3.mm.bing.net/th/id/OIP.X8cDxNYORFHjEX4br7q-NgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              title="Noodle"
            />
          </div>
          <div className="col-3">
            <Card
              img="https://th.bing.com/th/id/R.d1f71f008293d856af9c0627d6d1448f?rik=uTnVa7wMNYc5eg&pid=ImgRaw&r=0"
              title="Roasted fish"
            />
          </div>
          <div className="col-3">
            <Card
              img="https://img.freepik.com/premium-photo/chicken-biryani-biriyani-served-plate-isolated-table-top-view-indian-spicy-food_689047-3926.jpg"
              title="Biryani Rice"
            />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
              alt=""
              width={"100%"}
              height={180}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default InitialHome;
