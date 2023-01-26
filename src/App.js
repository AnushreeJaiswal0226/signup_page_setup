import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Otp from "./components/Otp";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/otp-verification" element={<Otp />}/>
        </Routes>
      </Router>
    </div>
  )
}
