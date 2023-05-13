import Image from 'next/image'
import css from '../styles/hero.module.css'
import Cherry from "../assets/Cherry.png"
import HeroImage from "../assets/heroImage.png"
import{UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

export default function Hero() {
    return(
        <div className={css.container}>
           {/* left side */}
           <div className={css.left}>

              <div className={css.cherryDiv}>
                  <span>More than Faster</span>
                  <Image src={Cherry} alt="" width={40} height={25}/>
              </div>
            
            <div className={css.heroText}>
                <span>Be The Fastest</span>
                <span>In Delivering</span>
                <span>
                    Your <span style={{color:"var(--themeRed)"}}>Pizza</span>
                </span>
            </div>

            <span className={css.miniText}>
                Our Mission is to filling your tummy with delicious food and with 
                free delivery
            </span>

            <button className={`btn ${css.btn}`}>
                Get Started
            </button>

            </div>

           {/* right side */}
               <div className={css.right}>
                    <div className={css.imageContainer}>
                        <Image src={HeroImage} alt="" layout="intrinsic"/>
                    </div>

                    <div className={css.ContactUs}>
                        <span>Contact Us</span>
                        <div>
                            <UilPhone color="white"/>
                        </div>
                    </div>
               </div>
        </div>
    )
}