import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div class="container">
        <header class="section-header">
          <h3>About Us</h3>
          <p>
            The company has established in 2018 and growing day by day itself as
            a leading integrated knitwear production house in Pakistan. Low
            profit is important criteria for Gracious Garments, caring and
            protecting for environment will also be a subject close to our
            hearts.
          </p>
        </header>

        <div class="row about-cols">
          <div class="col-md-4 wow fadeInUp">
            <div class="about-col">
              <div class="img">
                <img
                  src="img/photo-1441986300917-64674bd600d8.jpg"
                  alt=""
                  class="img-fluid"
                />
                <div class="icon">
                  <i class="ion-ios-speedometer-outline"></i>
                </div>
              </div>
              <h2 class="title">
                <a href="/">Our Mission</a>
              </h2>
              <p>
                Our mission to produce world-class garments. Our product
                includes mens, womens and kids wear. We offer all type of styles
                to produce with the clients request.
              </p>
            </div>
          </div>

          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="about-col">
              <div class="img">
                <img src="img/1.jpg" alt="" class="img-fluid" />
                <div class="icon">
                  <i class="ion-ios-list-outline"></i>
                </div>
              </div>
              <h2 class="title">
                <a href="/">Our Plan</a>
              </h2>
              <p>
                Our Vision is to supply garments worldwide to fashion market,
                where the garments supplied provide better value in quality,
                price, and service than it’s competitors so that the whole chain
                is benefited.
              </p>
            </div>
          </div>

          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="about-col">
              <div class="img">
                <img src="img/1 (1).jpg" alt="" class="img-fluid" />
                <div class="icon">
                  <i class="ion-ios-eye-outline"></i>
                </div>
              </div>
              <h2 class="title">
                <a href="/">Aim And Objective</a>
              </h2>
              <p>
                We pride in our ability to continually expand the market sectors
                through innovation, developments of new Products & improved
                methods..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
