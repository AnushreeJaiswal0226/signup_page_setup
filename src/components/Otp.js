import { useNavigate } from 'react-router-dom';

export default function Otp(){
    const opttext = <textarea className="otp--input" rows={1} cols={1} maxLength={1}/>
    const navigate = useNavigate();
	const clickHandler = () => {
		navigate(-1);
	}
    return(
        <div className="otp">
            <div className="rectangle">
                <div className='container'>
                    <span className="otp--text">Please enter OTP</span>
                    <div className="otp--field">
                        {opttext}
                        {opttext}
                        {opttext}
                        {opttext}
                        {opttext}
                        {opttext}
                    </div>
                    <div className="otpbtn">
                        <button className="otp--btns resend">RESEND</button>
                        <button className="otp--btns verify">VERIFY</button>
                    </div>
                    <button className="otp--call otp--btns">GET AN OTP VIA CALL</button>
                </div>
            </div>
            <i className='back fas fa-angle-left' onClick={clickHandler}></i>
            <div className="setup--img"></div>
        </div>
    )
}