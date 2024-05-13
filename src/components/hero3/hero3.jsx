import woman from "./man.png"
import right from "./right.png"
import "./hero3.scss"

function Hero3() {
    return (
      <div className="Hero container">
        <div className="display">
       <p className="hero__title" >Use anytime</p>
       <h2 className="hero__info" >Use anytime when you need  </h2>
       <p className="hero__description" >Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
       <h3 className="hero__more" >Learn more <img src={right} alt="" /></h3>
        </div>

       <img className="hero__img" src={woman} alt="" />
      </div>
    );
  }

  export default Hero3
