//import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdDashboard ,MdCurrencyBitcoin } from "react-icons/md";



export default function Home(){
    return (
        <>
           
              
     <div style={{height: "800vh", direction :"rtl"}} className = "body">
    
    <Sidebar>
      <Menu >
      <MenuItem>
       <MdDashboard /> Dashbord 
       
       
       </MenuItem>

      <MenuItem > <FaHome /> الصفحة الرئيسية </MenuItem>

        <SubMenu label="بيانات الموظفين ">
        
            
            
            <Link to ="/emp"> 

            <MenuItem > 
             قائمة الموظفين 
             
            </MenuItem> 
            
              </Link >
       
      <MenuItem > الطلبات </MenuItem>
      </SubMenu>

      <SubMenu label=" الخطة الاستراتيجية  "> 
       
      <MenuItem > الخطة التشغيلية  </MenuItem>
      <MenuItem > خطة الاجازات المتوقعه </MenuItem>
      <MenuItem > خطة التدريب </MenuItem>

      </SubMenu>

      
      <SubMenu label = " قروب العملات الرقمية ">  
       
          <MenuItem> المشتركين </MenuItem>
       
        <MenuItem> توصيات فلب </MenuItem>
        <MenuItem>  توصيات مدى متوسط </MenuItem>
        
      </SubMenu>

      
      
      
      
     
      </Menu>

     
      
       </Sidebar>
            </div>
    
        </>
    )
}