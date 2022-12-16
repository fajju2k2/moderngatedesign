import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <section id="intro">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="carousel-background">
                  <img src="img/slider/slider-03.jpg" alt="" />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>The Garments Expert</h2>
                    <p>
                      Manufacturer & Exporter all types of Knitted Garments.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img src="img/slider/slider-02.jpg" alt="" />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>The Garments Expert</h2>
                    <p>
                      Manufacturer & Exporter all types of Knitted Garments.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img src="img/slider/slider-01.jpg" alt="" />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>The Garments Expert</h2>
                    <p>
                      Manufacturer & Exporter all types of Knitted Garments.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img src="img/slider/slider-04.jpg" alt="" />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>The Garments Expert</h2>
                    <p>
                      Manufacturer & Exporter all types of Knitted Garments.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background">
                  <img src="img/slider/slider-05.jpg" alt="" />
                </div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>The Garments Expert</h2>
                    <p>
                      Manufacturer & Exporter all types of Knitted Garments.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon ion-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon ion-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        {/* <!--==========================
      Featured Services Section
    ============================--> */}
        <section id="featured-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 box box-bg">
                <div className="col-lg-12">
                  <p className="description">
                    {' '}
                    <strong>
                      We also like to appreciate all our team of professionals
                      who work harder to meet all the required uncompromising
                      standards of our valuable clients{' '}
                    </strong>
                    .
                  </p>
                </div>
                <div className="col-lg-12">
                  <table>
                    <tr>
                      <td>
                        <img src="img/affendi-sign.png" id="sign" alt="" />
                        <p>
                          <strong>
                            {' '}
                            Ali Affendi <br />{' '}
                          </strong>
                          Chef Executive
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="col-lg-7 box ">
                <p className="description">
                  <big>
                    {' '}
                    <b> Gracious Garments</b>{' '}
                  </big>{' '}
                  is a well Modernized knitted Garment manufacturing unit in
                  Pakistan. We make a all kind of Knitted Garments. We have well
                  equipped ultramodern production unit, Through our well
                  qualified professionals we maintain our quality always. As a
                  company, we believe in goodwill .We are price competitive and
                  equally faster in delivery. We are working with Leading
                  brands. The Company exports its products to global markets
                  such as UK, USA, Europe, Austria, Belgium, Slovenia, Italy and
                  France.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
