import logo from './logo.svg';
import './App.css';
import ShopRegister from './components/ShopRegister';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserRegister from './components/UserRegister';
import { BrowserRouter as Router, Routes, Route, Link ,useLocation} from 'react-router-dom'
import Home from './components/Home';
import Appointment from './components/Appointment';
import RepairShop from './components/RepairShop';
import ShopStatus from './components/ShopStatus';
import UserAppointment from './components/UserAppointment';
import ParentComponent from './components/parent';
import FinalUserAppointment from './components/FinalUserAppointment';
import FinalShop from './components/FinalShopView';
import FinalStatus from './components/FinalStatus';
import UserLogin from './components/UserLogin';
import ShopLogin from './components/ShopLogin';
// import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        {/* <Route path='side' element={<Sidebar/>} /> */}
        <Route path='shopLogin' element={<ShopLogin/>} />
        <Route path='userLogin' element={<UserLogin/>}/>
        <Route path='finalStatus' element={<FinalStatus />}/>
        <Route path='finalShop' element={<FinalShop/>}/>
        <Route path='finalUser' element={<FinalUserAppointment/>}/>
        <Route path='parent' element={<ParentComponent/>}/>
        <Route path="/userappointment" element={<UserAppointment/>}/>
        <Route path="/Status" element={<ShopStatus/>}/>
        <Route path="/Repairshop" element={<RepairShop/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/shopRegister" element={<ShopRegister/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
