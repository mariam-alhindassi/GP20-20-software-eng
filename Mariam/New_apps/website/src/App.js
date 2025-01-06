
import './css/style.css';       
import Navbar from './components/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function App() {
  return (
 
    <>
  

  <div style={{height: "100vh", direction :"rtl"}} className = "body">
    
    <Sidebar>
      <Menu >
      <MenuItem> Dashbord </MenuItem>

      <MenuItem>الصفحة الرئيسية  </MenuItem>

        <SubMenu label="بيانات الموظفين ">
       <MenuItem > قاىمة الموظفين </MenuItem>
      <MenuItem > الطلبات </MenuItem>
      </SubMenu>
     
      </Menu>
       </Sidebar>
 

    </div>

    </>

  );
}

export default App;
