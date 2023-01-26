import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function Signup(){
    const navigate = useNavigate();
	const clickHandler = () => {
		navigate(-1);
	}
    const [num, setNum] = useState('');
    const [num2, setNum2] = useState('');
    const handleNumChange = (event) => {
        const limit = 10;
        setNum(event.target.value.slice(0, limit));        
    };
    const handleNumChange2 = event => {
        const limit = 8;
        setNum2(event.target.value.slice(0, limit));
    };
    const [passwordShown, setPasswordShown, setClass] = useState(false);
    const togglePasswordVisiblity = (event) => {
        setPasswordShown(passwordShown ? false : true);
        setClass(passwordShown ? event.target.setAttribute("class", "far fa-eye"): event.target.setAttribute("class", "far fa-eye-slash"));
    };

    return(
        <div className="signup">
            <div className="rectangle">
                <div className="container">
                    <span className="signup--text">Sign Up</span>
                    <div className="input-area">
                        <div className="input-field">
                            <i className="icons"><img src={require("../images/person.png")} alt="" /></i>
                            <input className="group" placeholder="First Name" type="text"/>
                        </div>
                        
                        <div className="input-field">
                            <i className="icons"><img src={require("../images/person.png")} alt="" /></i>
                            <input className="group" placeholder="Last Name" type="text"/>
                        </div>

                        <div className="input-field">
                            <i className="icons"><img src={require("../images/person.png")} alt="" /></i>
                            <input className="group" placeholder="Username" type="text"/>
                        </div>

                        <div className="input-field">
                            <i className="icons"><img src={require("../images/mail.png")} alt="" /></i>
                            <input className="group" placeholder="Enter email address" type="email"/>
                        </div>

                        <div className="input-field">
                            <i className="icons"><img src={require("../images/phone.png")} alt="" /></i>

                            <div className="country-codes">
                                <select className="select-codes">
                                    <option>+1</option>
                                    <option>+91</option>
                                </select>
                            </div>

                            <input className="group" placeholder="Phone number" type="number" value={num} onChange={handleNumChange}/>
                        </div>

                        <div className="input-field">
                            <i className="icons"><img src={require("../images/lock.png")} alt="" /></i>
                            <input className="group" placeholder="Password" type={passwordShown ? "text" : "password"} value={num2} onChange={handleNumChange2}/>
                            <i class="far fa-eye" id="togglePassword" onClick={togglePasswordVisiblity}></i>
                        </div>
                    </div>

                    <span className="signup--smalltext">By signing up, I agree to the <a className="policy-terms" href="https://google.com">Privacy Policy & Terms & Conditions</a></span>

                    <button className="signup--btn">SIGN UP</button>

                    <span className="signup--smalltext center--text">Already have an account? <Link to="/login">Log In</Link></span>
                </div>
            </div>
            <i className='back fas fa-angle-left' onClick={clickHandler}></i>
            <div className="setup--img"></div>
        </div>
    )
} 