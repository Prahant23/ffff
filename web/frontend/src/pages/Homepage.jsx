import React, { useEffect } from "react";
import { loginApi} from "../apis/Api";

function Homepage() {
  useEffect(() => {
    loginApi().then((res) => {
      console.log(res.data);
    });
  }, []);// Add an empty dependency array to run the effect only once on mount



  return (
    <div>
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">100% Authentic</h4>
              <h1 className="mb-5 display-3 text-primary">
                vintage clothes and accessories
              </h1>
            </div>
            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <img
                      src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      alt="First slide"
                    />
                    <a href="#" className="btn px-4 py-2 text-white rounded">
                      Fruits
                    </a>
                  </div>
                  <div className="carousel-item rounded">
                    <img
                      src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="img-fluid w-100 h-80 rounded"
                      alt="Second slide"
                    />
                    <a href="#" className="btn px-4 py-2 text-white rounded">
                      Clothes
                    </a>
                  </div>
                  {/* Add more carousel items with local image paths */}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-className text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Authentic Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Clothes
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Shoes
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Accessories
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Accssories
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Cap</h4>
                          <p>
                            Vintage caps are a staple accessory that has been
                            around for decades1. They were initially introduced
                            as a way to protect the wearer's head from the sun,
                            rain, and cold. However, these days vintage caps
                            have become a fashion statement, and their
                            popularity has continued to grow over the years
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Shoes
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Vans off the wall</h4>
                          <p>
                            Vans, the original action sports brand and global
                            champion of creative exploration, is proud to
                            announce its 2023 brand campaign, “This is Off The
                            Wall,”
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $34.99
                            </p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Shoes
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Vans off the wall</h4>
                          <p>
                            Vans, the original action sports brand and global
                            champion of creative exploration, is proud to
                            announce its 2023 brand campaign, “This is Off The
                            Wall,”
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $34.99
                            </p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Accessories
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Classic ear ring</h4>
                          <p>Best in the town</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$3.99</p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Shoes
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Vans off the wall</h4>
                          <p>
                            Vans, the original action sports brand and global
                            champion of creative exploration, is proud to
                            announce its 2023 brand campaign, “This is Off The
                            Wall,”
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $34.99
                            </p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img">
                        <img
                          src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="img-fluid w-100 rounded-top"
                          alt=""
                        ></img>
                      </div>
                      <div
                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        Shoes
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Vans off the wall</h4>
                        <p>
                          Vans, the original action sports brand and global
                          champion of creative exploration, is proud to announce
                          its 2023 brand campaign, “This is Off The Wall,”
                        </p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold mb-0">$34.99</p>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img">
                        <img
                          src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="img-fluid w-100 rounded-top"
                          alt=""
                        ></img>
                      </div>
                      <div
                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        Shoes
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Vans off the wall</h4>
                        <p>
                          Vans, the original action sports brand and global
                          champion of creative exploration, is proud to announce
                          its 2023 brand campaign, “This is Off The Wall,”
                        </p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold mb-0">$34.99</p>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-5" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img">
                        <img
                          src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="img-fluid w-100 rounded-top"
                          alt=""
                        ></img>
                      </div>
                      <div
                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        Shoes
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Vans off the wall</h4>
                        <p>
                          Vans, the original action sports brand and global
                          champion of creative exploration, is proud to announce
                          its 2023 brand campaign, “This is Off The Wall,”
                        </p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold mb-0">$34.99</p>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid features py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="features-item text-center rounded bg-light p-4">
                <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-car-side fa-3x text-white"></i>
                </div>
                <div className="features-content text-center">
                  <h5>Never regret buying</h5>
                  <p className="mb-0">Free on order over 3000</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="features-item text-center rounded bg-light p-4">
                <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-shield fa-3x text-white"></i>
                </div>
                <div className="features-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="features-item text-center rounded bg-light p-4">
                <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-exchange-alt fa-3x text-white"></i>
                </div>
                <div className="features-content text-center">
                  <h5>30 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="features-item text-center rounded bg-light p-4">
                <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-phone-alt fa-3x text-white"></i>
                </div>
                <div className="features-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
