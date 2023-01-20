import React from 'react'

function Article({ heading, content }) {
  return (
    <article>
        <h2>{ heading }</h2>
        <p>{ content }</p>
    </article>
  )
}

export default Article