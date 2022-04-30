import "./dynamicDiv.css";
import "aos/dist/aos.css";
import AOS from 'aos';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {SkateImg, CodeImg, WaterImg, SmileImg, EyeImg, FlowImg, UkeImg, YoutubeImg, GithubImg, MeImg, BikeMov, SnowMov, PianoMov} from "../assets/index.js"
import { useEffect } from "react";

export const Skating = () => {
     return   <img className="my_image_click" src={SkateImg} alt="skate"/>
}

export const Winter = () => {
    return( 
        <video width="320" className="my_image_click" height="240"  controls loop autoPlay muted>
        <source src={SnowMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const Biking = () => {
    return( 
        <video width="320" className="my_image_click" height="240" controls loop autoPlay muted>
        <source src={BikeMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const Code = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    
    })
    return (
        <div className="code_container">
          <a  className="img-link" href="http://alexcod.es/github" target="_blank" rel="noreferrer">
              <img data-aos={"zoom-in"} className="inner_image" src={GithubImg} alt="github" />
          </a>
          <img className="my_image_click" src={CodeImg} alt="computer" />
        </div>
      );
}

export const Art = () => {
    const images = [ { original: WaterImg, thumbnail: WaterImg, }, { original: SmileImg, thumbnail: SmileImg, }, { original: EyeImg, thumbnail: EyeImg, }, { original: FlowImg, thumbnail: FlowImg, }, ];
    return (
    <div className="my_image_click">
        <ImageGallery items={images} />
    </div>
    );
}

export const Piano = () =>  {
    return( 
        <video width="320" className="my_image_click" height="240" controls autoPlay>
        <source src={PianoMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

export const Ukulele = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    
    })
    return( 
        <div className="code_container">
            <a className="img-link" href="https://youtu.be/zcLkoWz_v38" width="200px"target="_blank" rel="noreferrer">
                <img data-aos={"zoom-in"} className="inner_image" src={YoutubeImg} alt="youtube"/>
            </a>
            <img className="my_image_click" src={UkeImg} alt="uke" />
        </div>
  )
}

export const MyImage = () =>{
    return <img src={MeImg} id="my_image" className="my_image_click" alt="profilePicture" />
}

export const Raleigh = () => {
    return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206989.87646166902!2d-78.785140231539!3d35.84368666207371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1633447863939!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} title="Raleigh" className="my_image_click" loading="lazy"></iframe>
}

