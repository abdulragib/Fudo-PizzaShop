import {UilGithub} from '@iconscout/react-unicons'
import {UilFacebook} from '@iconscout/react-unicons'
import {UilInstagram} from '@iconscout/react-unicons'
import css from '../styles/footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

export default function Footer (params) {
   return(
      <div className={css.container}>
          <span>ALL RIGHT RESERVED</span>
          <div className={css.social}>
                <UilFacebook size={45} color="#2E2E2E"/>
                <UilGithub size={45} color="#2E2E2E"/>
                <UilInstagram size={45} color="#2E2E2E"/>
          </div>

          <div className={css.logo}>
            <Image src={Logo} alt="" width={50} height={50}/>
            <span>Fudo</span>
        </div>
      </div>
   )
}
