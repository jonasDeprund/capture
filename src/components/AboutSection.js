import React from 'react'
import home1 from '../img/home1.png'

// framer motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'

// Styled Components
import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Curabitur blandit tempus porttitor. Maecenas sed diam eget risus
          varius blandit sit amet non magna.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
    </About>
  )
}

export default AboutSection
