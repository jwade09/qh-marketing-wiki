import React from "react"
import Layout from "../includes/layout"
import { graphql, Link } from "gatsby"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { components } from "../includes/slices"

export const emi = graphql`
query Home {
  prismicHome {
    data {
      body {
        ... on PrismicHomeDataBodyRichContent {
          slice_type
          slice_label
          primary {
            rich_content {
              richText
            }
          }
        }
        ... on PrismicHomeDataBodyQuickBoxes {
          id
          slice_label
          slice_type
          items {
            icon
            color
            link {
              uid
              type
            }
            qb_content {
              richText
            }
            qb_title {
              text
            }
          }
        }
        ... on PrismicHomeDataBodyColorPicker {
          slice_type
          items {
            color_hex
          }
          primary {
            color_title {
              text
            }
          }
        }
      }
      content {
        richText
      }
      title {
        text
      }
    }
  }
}
`


const IndexPage = (props) => {
  return (
    <Layout>
    <section className="gradient-grey">
                <div className="wrapper flex">
                    <nav className="well r gutter">
                        <div className="nav-section">
                            <p>
                                <Link className="acc" to="/seo/seo-overview/"><strong>SEO</strong></Link>
                            </p>
                            <p>
                                <Link className="acc" to="/email/email-overview/"><strong>Email templates</strong></Link>
                            </p>
                            <p>
                                <Link className="acc" to="/ads/ads-overview/"><strong>Ad templates</strong></Link>
                            </p>
                        </div>
                    </nav>
                    <div className="content white well gutter seo">
                    <h1>{props.data.prismicHome.data.title.text}</h1>
                    <PrismicRichText field={props.data.prismicHome.data.content.richText} />
                    <SliceZone slices={props.data.prismicHome.data.body} components={components} />
                    </div>
                </div>
            </section>
    </Layout>
  )
}

export const Head = (props) => {
  return(
  <>
      <title>{props.data.prismicHome.data.title.text}</title>
      <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
  </>
  )
}

export default IndexPage
