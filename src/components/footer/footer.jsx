import './footer.scss'
import ago from './Logo.png'
import social from "./social.png"

function Footer() {
    return (
        <div className="container">
            <div className="footer">
                <img className='footer-img' src={ago} alt="" />
                <div className="footer-box">
                    <p className='footer-text'>Links</p>
                    <ul className="footer-item">
                        <li className="footer-list"> Home</li>
                        <li className="footer-list"> About us</li>
                        <li className="footer-list"> Careers</li>
                        <li className="footer-list"> Pricing</li>
                        <li className="footer-list"> Features</li>
                        <li className="footer-list"> Blog</li>
                    </ul>
                </div>
                <div className="footer-box1">
                    <p className="footer-text1">LEGAL</p>
                    <ul className="footer-item">
                        <li className="footer__item__text">Terms of use</li>
                        <li className="footer__item__text">Terms of conditions</li>
                        <li className="footer__item__text">Privecy policy</li>
                        <li className="footer__item__text">Cookie policy </li>
                    </ul>
                </div>
                <div className="footer-box2">
                    <h1 className='footer-title'>Newsletter</h1>
                    <p className="footer-text2">Over 25000 people have subscribed</p>
                    <div className="footer-box3">
                        <input type="text" className="footer-inp" placeholder='Enter your email' />
                        <button className='footer-btn'>Subscribe</button>
                        <p className='footer-text2'>We don’t sell your email and spam</p>
                    </div>
                </div>
            </div>
            <div className="footer-box4">
                <hr />
            </div>
            <div className="footer-box5">
                <p className='footer__text3'>Privacy & Terms</p>
                <p className='footer__text'>Contact Us</p>
                <p className='copyright'>Copyright @ 2022 xpence</p>
                <div className="">

                
                <img className='footer__subimg' src={social} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
