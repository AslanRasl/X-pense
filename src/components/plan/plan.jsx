import photo1 from "./1.svg"
import photo2 from "./2.svg"
import photo3 from "./3.svg"
import tick from "./tick.png"
import "./plan.scss"
function Plan() {
    return (
      <div id="pricing" className="plan__hero">
        <div className="container2 plan__hero__inner">
        <h1 className="hero__title">Choose your flexible plan.</h1>
        <div className="plan__display container3">

        <div className="plan__choose">
        <img className="plan__img" src={photo1} alt="" />
        <h2 className="plan__title">Starter Plan</h2>
        
        <p className="plan__subtitle"><img src={tick} alt="" /> Store unlimited data</p>
        <p className="plan__subtitle"><img src={tick} alt="" /> Export to pdf, xls, csv</p>
        <p className="plan__subtitle"><img src={tick} alt="" /> Cloud server support</p>

        <h3 className="plan__cost">$9.99/<h3 className="year">year</h3></h3>
        <p className="cost__sub">up to 3 user + 1.99 per user</p>

        <button className="btn1">Get this⠀⠀⠀→</button>
        </div>

        <div className="plan__choose">
            <img className="plan__img" src={photo2} alt="" />
            <h2 className="plan__title">Sliver Plan</h2>
            
            <p className="plan__subtitle"><img src={tick} alt="" /> Store unlimited data</p>
            <p className="plan__subtitle"><img src={tick} alt="" /> Export to pdf, xls, csv</p>
            <p className="plan__subtitle"><img src={tick} alt="" /> Cloud server support</p>

        <h3 className="plan__cost">$19.99/<h3 className="year">year</h3></h3>
        <p className="cost__sub">up to 3 user + 1.99 per user</p>

        <button className="btn2">Get this⠀⠀⠀→</button>
        </div>

        <div className="plan__choose">
            <img className="plan__img" src={photo3} alt="" />
            <h2 className="plan__title">Diamond Plan</h2>
            
            <p className="plan__subtitle"><img src={tick} alt="" /> Store unlimited data</p>
            <p className="plan__subtitle"><img src={tick} alt="" /> Export to pdf, xls, csv</p>
            <p className="plan__subtitle"><img src={tick} alt="" /> Cloud server support</p>

        <h3 className="plan__cost">$29.99/<h3 className="year">year</h3></h3>
        <p className="cost__sub">up to 3 user + 1.99 per user</p>

        <button className="btn1">Get this⠀⠀⠀→</button>
        </div>

        </div>
        </div>
      </div>
    );
}
export default Plan
