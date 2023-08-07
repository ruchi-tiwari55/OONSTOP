import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Main,Routes,Route} from 'react-router-dom';
import Assesment from './comonents/Assesment';
import Assesment1 from './comonents/Assesment1';
import Library from './comonents/Library';
import Roundstatus from './comonents/Roundstatus';
import MyAssesment from './comonents/MyAssesment';
import OOOI from './comonents/OOOI.JSX';
import { FaMobile } from "react-icons/fa6";
import { BiMobile } from "react-icons/bi";
import { AiFillFolder } from "react-icons/ai";
import {BiPencil} from "react-icons/bi"
import {BsQuestionCircle} from "react-icons/bs"
import {GrStatusDisabled} from "react-icons/gr"





function App() {
  return (
    <div className="App">

      {/* <OOOI/> */}
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  {/* <h2><BiMobile/></h2> */}
  <h2><BiMobile/></h2>
  <a className="nav-link active" href="sskjg">Assesment</a>
  <a className="nav-link" href="libbbb">My Assesment</a>


  
  </div>
</nav>
      
    </div>

         <>
         
         <div className='row'>
         <div className='col-10 col-md-2'>
<nav className="nav flex-column" > 
<h4><AiFillFolder/></h4>
  <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
  <h4><BiPencil/></h4>
  <a className="nav-link" href="sskjgkjfg">Assesment</a>
  <h4><BsQuestionCircle/></h4>

  
  <a className="nav-link" href='libb'>My Library</a>
  <h4><GrStatusDisabled/></h4>
  <a className="nav-link" href='JDJDJDJDJ'>Round status</a>
  
  
  

</nav>

</div>
</div>
   
 
   

 
        
    
     
      
      <Main>   
      
      <Routes>
        <Route exact path='/sskjgkjfg' element={<Assesment/>}/>
        <Route exact path='/sskjg' element={<Assesment1/>}/>
        <Route exact path='/ssk' element={<Roundstatus/>}/>
        {/* <Route path='/dash' element={<Dashboard/>}/>  */}
        <Route exact path='/libb' element={<Library/>}/>
        <Route exact path='/libbbb' element={<MyAssesment/>}/>
        <Route exact path='/JDJDJDJDJ' element={<Roundstatus/>}/>
        



        
        </Routes> 
       
                 </Main>    
                 </>
      



      
    

  
    </div>
  );
}

export default App;
