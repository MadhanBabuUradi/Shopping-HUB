import "./HeroBanner.css";
const HeroBanner = () => {
  return (
    <section>
      <div className="container">
        <div className="back">
          <div className="text" >
            <h1>
              Shopping And Department 
              <br/>Store            
            </h1>
            <p>
              Shopping is bit of relaxing hobby for me.<br/> Whichis sometimes troubling for the bank balance
            </p>
            <button>Learn More</button>
          </div>
          <div className="image" >
            <img className="coming-image" src="assets/Screenshot__94_-removebg-preview.png" ></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner