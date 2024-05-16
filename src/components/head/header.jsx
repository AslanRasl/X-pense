import Logo from "./Logo.svg"
import Girl from "./girl.png"
import { Link } from "react-scroll";
import "./head.scss"
function Header() {
  return (
    <div className="head__top">
      <div className="container">

      <div className="head__topp ">
        <img className="logo" src={Logo} alt="" />
        <Link
            to="features"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className="head__item"
          >
            Features
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className="head__item"
          >
            About us
          </Link>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className="head__item"
          >
            Pricing
          </Link>
          <Link
            to="feedback"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="head__item"
          >
            Feedback
          </Link>
        <button className="head__btn">Request a demo</button>
      </div>
      <div className="sub__head ">
        <h1 className="head__title">Track your Expenses & Save Money</h1>
        <p className="head__subtitle">Helps you to organize your income and expenses</p>
        <div className="btn__text">
          <button className="head__subbtn">Try free demo⠀↓</button>
          <p className="head__description">— Web, iOS and Android</p>
          <img className="girl" src={Girl} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header 
