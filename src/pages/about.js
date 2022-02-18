import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"

export default function About({data}) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.creatorSetup.childImageSharp.fluid} />
        <TextBody>
          I'm intrigued about online solopreneurs, the creator economy, and where it's heading. 
          I'll use this blog as a platform for me to learn more about these topics.
        </TextBody>
        <Button href="mailto:carrds.xyz@gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    creatorSetup: file(relativePath: {eq: "assets/images/creatorSetup.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
