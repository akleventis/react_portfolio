import "./dynamicDiv.css";
import "aos/dist/aos.css";
import AOS from 'aos';
// import ImageGallery from "react-image-gallery";
import emailjs from "@emailjs/browser";
import "react-image-gallery/styles/css/image-gallery.css";
import {ToledoImg, CodeImg, UkeImg, YoutubeImg, GithubImg, MeImg, MeAudrey, DiscImg, TacoImg, SnowMov, PianoMov} from "../assets/index.js"
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// export const Skating = () => {
//      return   <img className="my_image_click" src={SkateImg} alt="skate"/>
// }
export const Travel = () => {
     return   <img className="my_image_click" src={ToledoImg} alt="skate"/>
}

export const Taco = () => {
     return   <img className="my_image_click" src={TacoImg} alt="skate"/>
}

export const Disc = () => {
     return   <img className="my_image_click" src={DiscImg} alt="skate"/>
}

export const Winter = () => {
    return( 
        <video width="320" className="my_image_click" height="240"  controls loop autoPlay muted>
        <source src={SnowMov} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
}

// export const Biking = () => {
//     return( 
//         <video width="320" className="my_image_click" height="240" controls loop autoPlay muted>
//         <source src={BikeMov} type="video/mp4" />
//         Your browser does not support the video tag.
//         </video>
//       )
// }

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

// export const Art = () => {
//     const images = [ { original: WaterImg, thumbnail: WaterImg, }, { original: SmileImg, thumbnail: SmileImg, }, { original: EyeImg, thumbnail: EyeImg, }, { original: FlowImg, thumbnail: FlowImg, }, ];
//     return (
//     <div className="my_image_click">
//         <ImageGallery items={images} />
//     </div>
//     );
// }

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
    return <img src={MeAudrey} id="my_image" className="my_image_click" alt="profilePicture" />
}

export const Raleigh = () => {
    return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.64169563106!2d-104.85511145000001!3d39.76433895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1690768398459!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} title="Raleigh" className="my_image_click" loading="lazy"></iframe>
}
export const Email = () => {
    const notify = (msg) => toast.success(msg)
    const notifyError = (msg) => toast.error(msg)

    const [user_id, service_id, template_id] = [process.env.REACT_APP_EMAIL_USER, process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE]
    const handleEmail = (e) => {
        e.preventDefault();
        console.log(user_id, service_id, template_id)
        emailjs.sendForm(service_id, template_id, e.target, user_id).then(
            (result) => {
                notify("Your message has been delivered");
                document.getElementById('email-form').reset();
            },
            (error) => {
                notifyError("error sending email")
            }
        )
    }
    return( 
        <div className="my_image_click" style={{border: "none"}}>
            <form id='email-form' onSubmit={handleEmail} >
                <input name="from_name" className="e-input" autoComplete="off" autoCorrect="off" required type="text" placeholder="Name" />
                <input name="from_email" className="e-input" autoComplete="off" autoCorrect="off" required type="text" placeholder="Email" />
                <textarea name="message" className="e-input" required placeholder="Message"></textarea>
                <input type="submit" className="send" value="Send"/>
            </form>
            <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </div>
  )
}