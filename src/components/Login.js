import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

export default function Login(){
    const navigate = useNavigate();
	const clickHandler = () => {
		navigate(-1);
	}
    const [num, setNum] = useState('');
    const handleNumChange = event => {
        const limit = 10;
        setNum(event.target.value.slice(0, limit));
    };

    return(
        <div className="login">
            <div className="rectangle">
                <div className="container">
                    <span className="login--text">Log In With Phone Number</span>

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

                    <span className="login--smalltext">Note : We will send you an OTP on your phone number</span>

                    <Link to="/otp-verification"><button className="otp--btn">GET OTP</button></Link>

                    <span className="login--mediumtext">Or Log In With</span>

                    <div className="login--panel">
                        <div className="login--btn"><i class='fab fa-facebook-f'></i></div>
                        <div className="login--btn"><i class='fab fa-google'></i></div>
                        <div className="login--btn"><i class='fab fa-linkedin-in'></i></div>
                    </div>

                    <span className="login--mediumtext">By logging in, I agree to the <a href="https://google.com">Privacy Policy & Terms & Conditions</a></span>

                    <span className="login--mediumtext">Create a new account. <Link to="/signup">Sign Up</Link></span>
                </div>
            </div>
            <i className='back fas fa-angle-left' onClick={clickHandler}></i>
            <div className="setup--img"></div>
        </div>
    )
}