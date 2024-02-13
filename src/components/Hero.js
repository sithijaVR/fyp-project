
import "./HeroStyle.css";
 
function Hero(props){
    return(
      <div className={props.cName}>
        <img alt="heroimg" src={props.heroIMG}/>
        <div className="overlay"></div>
        
        <div className="herotext">
            <h1>
            {props.title}
            </h1>
            <p>
           {props.text}
            </p>

            <a href={props.url} className={props.btnclass}>
                {props.buttontext}
                
            </a>
        

    </div>
    </div>  
    
    )

}

export default Hero;