import React from 'react'
import Link from 'gatsby-link'

export default () =>
  <div>
    Hi You are at About Page.
    <Link to="/" style={{ display: block }}>
      Home
    </Link>
    <form action="/thankyou/">
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="email" placeholder="email" />
      <button type="submit">Submit </button>
    </form>
  </div>
