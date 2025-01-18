import Nav from 'react-bootstrap/Nav';
import Task from '../pages/Task';
import Profile from '../pages/Profile';
import LoginPage from '../pages/LoginPage';



export default function Navbar (){
    return (

        <>


            <div >
            
            <Nav className="me-auto">
            <Nav.Link href="loginpage" style={{color:"white"}}> تسجيل الدخول </Nav.Link>
            <Nav.Link href="home" style={{color:"white"}}>الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="Task" style={{color:"white"}}>المهام </Nav.Link>
            <Nav.Link href="profile" style={{color:"white"}}> الملف الشخصي </Nav.Link>
           

          </Nav>
            </div>
            </>
    
    );
}