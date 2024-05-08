import Logo from "./Logo.svg"
import Girl from "./girl.png"
import Product from "./Product.png"
import "./head.scss"
function Header() {
  return (
    <div className="head__top">
      <div className="container">

      <div className="head__topp ">
        <img className="logo" src={Logo} alt="" />
        <p className="head__item">Features</p>
        <p className="head__item">About us</p>
        <p className="head__item">Pricing</p>
        <p className="head__item">Feedback</p>
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
      <img className="Product " src={Product} alt="" />
    </div>
  );
}

export default Header 
