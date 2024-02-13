import React from "react";
import Hero from "../components/Hero";

 
function Homescrean(){
    
    return(
      <div>
        
        <Hero
        cName="hero"
        heroIMG="https://eit-campus.eu/wp-content/uploads/2023/08/Languages-and-instructions-for-PLC-controllers.png"
        title="Introduction"
        text="Welcome to our webpage on PLCs, where we simplify complex concepts for you! Here, we'll explore PLCs, how they connect with PROFIBUS, and how they simulate real-world scenarios using Factory IO. We'll also dive into analog input and output control. Whether you're a pro or a beginner, this page guides you to understanding PLCs and their role in modern industry. You can learn, evaluate yourself, and explore through this webpage's different kinds of content."
        buttontext="Let's start.."
        url="/"
        btnclass="show"
       />
         

    </div>  
    )

}

export default Homescrean;