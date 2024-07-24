import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h2>About Us</h2>
              <p>
              This web app is made to provide flawless shopping experience to the users.It is a one stop solution for all your shopping needs.It provides you with the best deals and offers from all the major e-commerce websites like Amazon,Flipkart,Myntra etc.
              </p>
            </div>

            <div className="footer-section">
              <h2>Links</h2>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/madhanbabuuradi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://x.com/UradiMadhanBabu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                
              </ul>
            </div>

            <div className="footer-section">
              <h2>Contact Us</h2>
              <p>Email: umadhanbabu01@gmail.com</p>
           
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright @UradiMadhanBabu
          </p>
        </div>
      </footer>
  )
}

export default Footer