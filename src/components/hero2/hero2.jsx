import woman from "./woman.png"
import right from "./right.png"
 import "./hero2.scss"
function Hero2() {
    return (
      <div className="hero">

       <img className="hero__img" src={woman} alt="" />

       <div className="text__btn">

       <p className="hero__title" >free some cost</p>
       <h2 className="hero__info" >Save cost for you and family</h2>
       <p className="hero__description" >Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
       <h3 className="hero__more" >Learn more <img src={right} alt="" /> </h3>
       </div>

      </div>
    );
  }

  export default Hero2