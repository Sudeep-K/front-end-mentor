import React from 'react'

function Article({ imageSrc, span, heading, paragraph }) {
  return (
    <article>
        <img src={imageSrc} alt="article figure" />
        <div>
            <span>{ span }</span>
            <h3>{ heading }</h3>
            <p>{ paragraph }</p>
        </div>
    </article>
  )
}

export default Article