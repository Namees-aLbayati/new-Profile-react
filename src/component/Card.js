import React from 'react';
import {AiOutlineEye} from "react-icons/ai"
function page(website){
window.location.assign(website)}
const Cards=({title,description,website,image})=>{
    return(

     
      <div class="flip-card m-5 p-5">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={require(`../images/${image}`)} alt="Avatar" className='cards'/>
        </div>
        <div class="flip-card-back">
          <h3>{title}</h3>
          <p class='p-5' className='text'>{description}</p>
         <button class="button button2 m-5 fw-bolder" onClick={()=> window.location.assign(`${website}`)}>Live Demo<AiOutlineEye/></button>
         
       </div>
      </div>
    </div>
        
 
    )
}
export default Cards;