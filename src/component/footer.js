import React from "react";
function Email(){
    window.location.assign("https://nameesmohammed.herokuapp.com/")
}
const Footer=()=>{
    return(
        <footer class='text-light text-center'>
      <p className="mt-3">Copyright &copy; 2022|
      <a onClick={Email}>Namees Mohammed
          </a></p>
        </footer>
    )
}
export default Footer ;