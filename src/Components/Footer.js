const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <img src="img/gracious-logo.png" id="gglogo" alt="" />
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="ion-ios-arrow-right"></i>{' '}
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>{' '}
                  <a href="Aboutus.html">About Us</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>{' '}
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <i class="ion-ios-arrow-right"></i>{' '}
                  <a href="contactUs.html">Contact Us</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A897 Azam Street <br />
                North Nazimabad karachi,
                <br />
                Pakistan <br />
                <strong>Phone:</strong> 03343024039
                <br />
                <strong>Email:</strong>Aliaffendi76@gmail.com
                <br />
              </p>

              <div class="social-links">
                <a
                  href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  class="twitter"
                >
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/" class="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" class="instagram">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="https://plus.google.com/discover" class="google-plus">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href="https://pk.linkedin.com/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>Gracious Garmnets</strong>. All Rights
          Reserved
        </div>
        <div class="credits"></div>
      </div>
    </footer>
  );
};

export default Footer;
