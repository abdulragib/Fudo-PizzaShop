import Image from 'next/image'
import css from '../styles/hero.module.css'
import Cherry from "../assets/Cherry.png"

export default function Hero() {
    return(
        <div className={css.container}>
           {/* left side */}
           <div className={css.left}>
              <div className={css.cherryDiv}>
                  <span>More than Faster</span>
                  <Image src={Cherry} alt="" width={40} height={25}/>
              </div>
            </div>


            <div className={css.heroText}>
                <span>Be The Fastest</span>
                <span>In Delivering</span>
                <span>
                    Your <span style={{color:"var(--themeRed)"}}>Pizza</span>
                </span>
            </div>

           {/* right side */}
               <div className={css.rightSide}>
                    
               </div>
        </div>
    )
}