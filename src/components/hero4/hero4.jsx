import photo1 from "./1.svg"
import photo2 from "./2.svg"
import photo3 from "./3.svg"
import "./hero4.scss"

function Hero4() {
  return (
    <div id="about"  className="product container">
      <div className="text co">
        <h1 className="title">The Product we work with.</h1>
        <p className="subtitle">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
      </div>

      <div className="hero__item">

        <div className="hero4__item">
          <span className="sub__img1">
            <img className="img" src={photo1} alt="" />
          </span>
          <h3 className="item__title">Cross platform</h3>
          <p className="item__subtitle">Elit esse cillum dolore eu fugiat nulla pariatur</p>
          <p className="arrow__item">→</p>
        </div>

        <div className="hero4__item">
          <span className="sub__img2">
            <img className="img" src={photo2} alt="" />
          </span>
          <h3 className="item__title">Cloud server</h3>
          <p className="item__subtitle">Elit esse cillum dolore eu fugiat nulla pariatur</p>
          <p className="arrow__item">→</p>
        </div>

        <div className="hero4__item">
          <span className="sub__img3">
            <img className="img" src={photo3} alt="" />
          </span>
          <h3 className="item__title">Pure Javascript</h3>
          <p className="item__subtitle">Elit esse cillum dolore eu fugiat nulla pariatur</p>
          <p className="arrow__item">→</p>
        </div>

      </div>
    </div>
  );
}
export default Hero4
