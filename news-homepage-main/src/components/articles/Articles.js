import React from 'react'
import retroPc from '../../assets/images/image-retro-pcs.jpg'
import topLaptops from '../../assets/images/image-top-laptops.jpg'
import gamingGrowth from '../../assets/images/image-gaming-growth.jpg'
import Article from './Article';

function Articles() {
  return (
    <div>
        <Article
            imageSrc={retroPc}
            span="01"
            heading="Reviving Retro Pcs"
            paragraph="What happens when old PCs are given modern upgrades?"
        />
        <Article
            imageSrc={topLaptops}
            span="02"
            heading="Top 10 Laptops of 2022"
            paragraph="Our best picks for various needs and budgets."
        />
        <Article
            imageSrc={gamingGrowth}
            span="03"
            heading="The Growth of Gaming"
            paragraph="How the pandemic has sparked fresh opportunities."
        />
    </div>
  )
}

export default Articles