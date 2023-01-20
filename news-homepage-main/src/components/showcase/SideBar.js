import React from 'react'
import Article from './Article';

function SideBar() {
  return (
    <div>
        <h1>New</h1>
        <Article
            heading="Hydrogen VS Electric Cars"
            content="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <Article
            heading="The Downsides of AI Artistry"
            content="What are the possible adverse effects of on-demand AI image generation?"
        />
        <Article
            heading="Is VC Funding Drying Up?"
            content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
    </div>
  )
}

export default SideBar