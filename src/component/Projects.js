import React from "react";
import Cards from './Card'

    const Projects=({myProjects})=>{
    return(



        <div class="d-flex  flex-wrap justify-content-between ">
         
         {  myProjects.map(({title,description,github,image,website}) => (

    <Cards title={title} description={description} github={github} image={image} website={website}/>

))};

</div>



    )
}
export default Projects;