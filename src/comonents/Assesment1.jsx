import React from 'react'
import { HiGlobeAlt } from "react-icons/hi";
import {HiAnnotation} from 'react-icons/hi'
import { FcComboChart } from "react-icons/fc";
import {TbWorldDownload} from "react-icons/tb"
import {SlCalender} from "react-icons/sl"
import {LiaShareAltSolid} from "react-icons/lia"
import './Assesment1.css'
import './Library.css'


function MyAssesment() {
  return (
    <div>
      
      Assesments overview
     

<div className='container'>
<div md={{span:6,offset:3}}>

   

  <div className="card-group">
  <div className="card" >
   
    <div className="card-body">
      <h5 className="card-title">Total Assesment</h5>
      <h1>
        <HiAnnotation/>
         34
         </h1>
    </div>
    <div className="card-footer">
    </div>
  </div>
  <div className="card">
   
    <div className="card-body">
      <h5 className="card-title">Candidates</h5>
      <div className='row'>
        <span>
        <h1><HiGlobeAlt/> 11,145  </h1>
        <h4></h4>
        </span>
      


        </div>
      <p className="card-text">Total Candidate</p>
    </div>
    <div className="card-footer">
    </div>
  </div>
  <div className="card">
   
    <div className="card-body">
      <h5 className="card-title">Candidate source</h5>
      <h1 className='text-danger'><TbWorldDownload/ ></h1>
      <p className="card-text">dcffdc</p>
    </div>
    <div className="card-footer">
    </div>
  </div>
  <div className="card">
   
   <div className="card-body">
     <h5 className="card-title">Total Purpose</h5>
     <h1><FcComboChart/></h1>
   </div>
   <div className="card-footer">
   </div>
 </div>

</div>
  
  

</div>
<h3>My Assesment</h3>
<div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
     
      <div className="card-body">
      <button type="button" className="btn btn-outline-primary" disabled>+</button>
        <h5 className="card-title"> New Assesment</h5>
        <p> From here you can add question of multiple types like MCQs,subjective (text or paragraph)</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Math Assesment</h5>
        <p className="card-text">job    <SlCalender/> 20 Apr 2023
         </p>
         <div >00 duration  00 question 
         <button type="button" className="btn btn-light" ><LiaShareAltSolid/>Share</button>
         <button type="button" className="btn btn-primary position-relative">
             P
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
  <span className="visually-hidden">l</span>

  </span>
</button>
         
         
         </div>
      </div>
     
      
      
      
    </div>
  </div>
  <div className="col">
    <div className="card">
       
    <div className="card-body">
        <h5 className="card-title">Math Assesment</h5>
        <p className="card-text">job    <SlCalender/> 20 Apr 2023
         </p>
         <div >00 duration  00 question 
         <button type="button" className="btn btn-light" ><LiaShareAltSolid/>Share</button>
         <button type="button" className="btn btn-primary position-relative">
  P
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
  <span className="visually-hidden">l</span>

  </span>
</button>
         
         
         </div>
      </div>
      
    </div>
  </div>
 </div>
 </div>
</div>
</div>

  )
}

export default MyAssesment