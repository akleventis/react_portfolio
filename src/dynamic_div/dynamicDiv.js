import "./dynamicDiv.css";
import "aos/dist/aos.css";
import "react-image-gallery/styles/css/image-gallery.css";
import {TravelImg, MeAudrey, DiscMov, TacoImg, SnowMov, PianoMov, VideographyMov} from "../assets/index.js"


export const Travel = () => {
     return   <img className="my_image_click" src={TravelImg} alt="travel"/>
}

export const Taco = () => {
     return   <img className="my_image_click" src={TacoImg} alt="taco kitty"/>
}

export const Disc = () => {
    return( 
        <video width="320" className="my_image_click" height="240" controls loop autoPlay muted>
        <source src={DiscMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const Winter = () => {
    return( 
        <video width="320" className="my_image_click" height="240"  controls loop autoPlay muted>
        <source src={SnowMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const Videography = () => {
    return( 
        <video width="320" className="my_image_click" height="240"  controls autoPlay muted>
        <source src={VideographyMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const Piano = () =>  {
    return( 
        <video width="320" className="my_image_click" height="240" controls autoPlay>
        <source src={PianoMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const MyImage = () =>{
    return <img src={MeAudrey} id="my_image" className="my_image_click" alt="profilePicture" />
}

export const Raleigh = () => {
    return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.64169563106!2d-104.85511145000001!3d39.76433895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1690768398459!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} title="Raleigh" className="my_image_click" loading="lazy"></iframe>
}
