import Carousel from "react-bootstrap/Carousel";
import Card from "./component/Card";
import { useProduct } from "./context/ProductConetxt";
import { Link } from "react-router-dom";
import Header from "./Navbar/Header";

function Home() {
  const { products, searchTerm } = useProduct();
  const brand = "sneakers";

  return (
    <>
      {/* -----------------------Carousel portion--------------------------------- */}
      <Carousel className="container" style={{ width: "100%", height: "vh-50" }}>
        <Carousel.Item>
          <img
            className="border rounded"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            src="images\img1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>EpicStride Boost</h3>
            <p >Unleash Your Stride, Embrace the Epic Journey.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="broder rounded"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            src="images\img2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>GravityFlex Precision</h3>
            <p>Defy Gravity, Move with Precision.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="border rounded
          
          
          "
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            src="images\img3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>ZenComfort Walkers</h3>
            <p>
            Experience Zen with Every Step, Where Comfort Meets Style."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-5 container p-2 shadow">
        <p className="text-center fs-4 gradient-text">Our Latest Products</p>
        <hr/>
        <div className="mt-4 d-flex gap-4">
          <div
            className="mx-auto card w-25 product-card bg-black"
            style={{ height: "200px" }}
          >
            <img style={{height:'100%'}}
              className="card-img-top"
              src="images\cateogry1.jpg"
              alt="Card image cap"
            />
          </div>

          <div
            className="mx-auto card w-25 product-card"
            style={{ height: "200px" }}
          >
            <img style={{height:'100%'}}
              className="card-img-top"
              src="images\category4.jpg"
              alt="Card image cap"
            />
          </div>

          <div
            className="mx-auto card w-25 product-card"
            style={{ height: "200px" }}
          >
            <img style={{height:'100%'}}
              className="card-img-top"
              src="images\category3.jpg"
              alt="Card image cap"
            />
          </div>


        </div>
      </div>

      {/*-----------------------------------BEST SELLER PROTION -------------------------------------------*/}
      <div className="mt-5 container">
        <p className="fs-4 text-center gradient-text">Meet Our Best Seller</p><hr/>
      </div>

      {/* -----------------------------Card section---------------------------------- */}

      <div className="container d-flex flex-wrap gap-5">
        {products.map(
          (product) =>
            product.category === brand && (
              <Link to={`/products/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
              <Card key={product.id} product={product} />
            </Link>
            )
        )}
      </div>
      <div></div>
      {/*----------------------------------- Category section--------------------------------------- */}

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <div className="container mt-5">
              <div className="card product-card">
                <img
                  src="images\sneaker.jpg"
                  alt="Button Image"
                  className="card-img img-fluid"
                />

                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <button className="btn btn-outline-light">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="container mt-5">
              <div className="card product-card">
                <img
                  src="images\boot.jpg"
                  alt="Button Image"
                  className="card-img img-fluid"
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <button className="btn btn-outline-light">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
