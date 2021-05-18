import React from 'react'
import home1 from '../img/home1.png'

// Import setup
import styled from 'styled-components'

// Styled Components
import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
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
