import woman from "./woman.png"
import right from "./right.png"
import "./hero.scss"

function Hero() {
  return (
    <div id="features" className="Hero container">
      <div className="hero__inner">
      <div className="display">
        <p className="hero__title" >Alwalys online</p>
        <h2 className="hero__info" >Real-time support with cloud</h2>
        <p className="hero__description" >Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
        <h3 className="hero__more" >Learn more <img src={right} alt="" /></h3>
      </div>
      <img className="hero__img" src={woman} alt="" />
      </div>
    </div>
  );
}

export default Hero
