import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import chan from "./Images/steak.jpg";
import Sdata from './Sdata';
const App = () => {
  const [bckgr,setbckgr]=useState(0);
  useEffect(()=>{
    const timer=setTimeout(() => {
      if(bckgr===2){
        setbckgr(0);
      }
      else{
        setbckgr(bckgr+1);
      }
    }, 10000);
    return()=> clearTimeout(timer)
  },[bckgr]);
  console.log(bckgr);
 const bgimagestyle={
  backgroundImage:`url(${Sdata[bckgr].url})`
 };
 const gotoNext =(currentstate)=>{
setbckgr(currentstate);
 }
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active bg-style" style={bgimagestyle}>
    <div className='transparent-bg'>
   <Navbar/>
   <div className='section-styling'>
  <h1>Welcome to <br/> <span> Pato Place</span></h1>
  <button className='btn'>Look Menu</button>
  <div className='slide-line'>
  {Sdata.map((elem,currentstate)=>{
   return <button key={currentstate} onClick={()=> gotoNext(currentstate)}></button>})}
    </div>
  </div>
  </div>
  </div>
    </div>
</div>
{/* Next Section */}
<section className="section-welcome bg1-pattern">
<div className='container text-center'>
<div className='row'>
<div className="col-md-6">
<div className="wrap-text-welcome">
<span className="tit2">Italian Restaurant</span>
<h3 className="tit3 mb-35 mt-3"> Welcome
</h3>
<p className="text-center mb-22 size3 mr-lg-auto">
Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
</p>
<a href="#" className="txt4"> Our Story
<FaRegArrowAltCircleRight className='ml-10'/>
</a>
</div>
</div>
<div className="col-md-6 py-2">
<div className="wrap-pic-welcome hov-img-zoom mx-auto">
<img src={chan} alt="IMG-OUR" height="200" width="300"/>
</div>
</div>
</div>
</div>
</section>

    </>
  )
}

export default App;

