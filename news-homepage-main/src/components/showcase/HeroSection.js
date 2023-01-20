import React from 'react'
import web3Desktop from '../../assets/images/image-web-3-desktop.jpg'
import web3Mobile from '../../assets/images/image-web-3-mobile.jpg'

function HeroSection() {
  return (
    <section>
        <picture>
            <source type='image' srcSet={ web3Desktop } size="(min-width: 768px)" />
            <img src={ web3Mobile } srcSet={ web3Desktop } size="(min-width: 768px)" alt='geometric figures' />
        </picture>

        <article>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
                <button>Read more</button>
            </div>
        </article>
    </section>
  )
}

export default HeroSection