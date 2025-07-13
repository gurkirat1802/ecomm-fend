import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import LoginAdmin from './Pages/LoginAdmin';
import Signup from './Pages/Signup';
import SignupAdmin from './Pages/SignupAdmin';
import Homepage from "./Pages/Homepage";
import Aboutpage from './Pages/Aboutpage';
import Contactuspage from './Pages/ContactusPage';
import Medicinedet from './components/Medicinedet';
import Cartpage from './Pages/Cartpage';
import PaymentPage from './Pages/PaymentPage';
import PaymentDone from './Pages/PaymentDone';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path="/contactus" element={<Contactuspage />} />
        <Route path="/medicinedetails" element={<Medicinedet />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/paymentdone" element={<PaymentDone />} />
        




        <Route path="/login" element={<Login />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupadmin" element={<SignupAdmin />} />
      </Routes>
    </div>
  );
}

export default App;