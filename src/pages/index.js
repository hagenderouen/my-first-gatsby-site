// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Layout pageTitle={"Home Page"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Cute Kitten" src="../images/kitten.jpg" />
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage