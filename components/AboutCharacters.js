import React from 'react';
import Image from 'next/image';
import image_topography from '../public/Assets/img-topography.png'
import image_map from '../public/Assets/img-map-vikendi.png'
import mask_char from '../public/Assets/Beast_Mask_Char.png'
import g_char from '../public/Assets/G_Char.png'

const AboutCharacters = () => {
  return (
    <aside className="characters-container">
      <div className="background-images">
        <div className="map-wrapper">
          <Image
            src={image_map}
            alt="map layer"
          />
        </div>
        <div className="topography-wrapper">
          <Image
            src={image_topography}
            alt="topography layer"
          />
        </div>
        <div className="sparks"/>
        <div className="mask-char-wrapper">
          <Image
            src={mask_char}
            alt="masked character"
          />
        </div>
        <div className="g-char-wrapper">
          <Image
            src={g_char}
            alt="girl character"
          />
        </div>
      </div>
    </aside>
  )
}

export default AboutCharacters;