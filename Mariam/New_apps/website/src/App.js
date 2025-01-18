
import './css/style.css';       
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//import LoginPage from './pages/Login';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import Emp from './pages/subpages/Emp';
import Navbar from './components/Navbar'
import Task from './pages/Task';
import Profile from './pages/Profile';
import Dashbord from './pages/Dashbord';






function App() {
  return (
 
    <>
    <header> 
      <h1> Home Page</h1>
      <Navbar />
    </header>
    <Router>
      <Routes>
        <Route path="/" element ={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/emp' element ={<Emp />} />
        <Route path='*' element = {<PageNotFound />} /> 
        <Route path='/task' element ={<Task />} />
        <Route path='profile' element ={<Profile /> } /> 
        <Route path='loginpage' element ={<LoginPage /> } /> 
        <Route path='/dashbord' element = {<Dashbord />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
