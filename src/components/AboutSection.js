import React from 'react'
import home1 from '../img/home1.png'

// framer motion
import { motion } from 'framer-motion'

// Styled Components
import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Curabitur blandit tempus porttitor. Maecenas sed diam eget risus
          varius blandit sit amet non magna.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  )
}

export default AboutSection
