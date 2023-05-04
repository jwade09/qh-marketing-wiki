import React from "react"
import Layout from "../../includes/layout"
import { graphql, Link } from "gatsby"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { components } from "../../includes/slices"


export const emi = graphql`
    query Email($id: String) {
        prismicEmail(id: {eq: $id}) {
            data {
                content {
                  richText
                }
                title {
                  richText
                  text
                }
                body {
                  ... on PrismicEmailDataBodyRichContent {
                    slice_type
                    slice_label
                    primary {
                      rich_content {
                        richText
                      }
                    }
                  }
                    ... on PrismicEmailDataBodyCallout {
                      id
                      primary {
                        callout {
                          id
                          document {
                            ... on PrismicCalloutEmail {
                              id
                              data {
                                content {
                                  richText
                                }
                                title {
                                  text
                                }
                              }
                            }
                          }
                        }
                      }
                      slice_type
                      slice_label
                    }
                  }
              }
              uid
            }
            allPrismicEmail(sort: {data: {order: ASC}}) {
              nodes {
                uid
                data {
                    title {
                      text
                    }
                  }
              }
            }
    }
`

const EmailPage = (props) => {
    
    return (
        <Layout>    
            <section className="gradient-grey">
                <div className="wrapper flex">
                    <nav className="well r gutter">
                        <div className="nav-section">
                            <p>
                                <Link className="acc" to="/seo/seo-overview/"><strong>SEO</strong></Link>
                            </p>
                        <p className="acc nav-active"><strong>Email templates</strong></p>
                        <div className="type-selected">
                          {props.data.allPrismicEmail.nodes.map(node => (
                              <div className="nav-item"><Link key={node.uid} to={`/email/${node.uid}/`} activeClassName="active">{node.data.title.text}</Link></div>
                          ))}
                        </div>
                            <p>
                                <Link className="acc" to="/ads/ads-overview/"><strong>Ad templates</strong></Link>
                            </p>
                        </div>
                    </nav>
                    <div className="content white well gutter seo">
                    <PrismicRichText field={props.data.prismicEmail.data.content.richText} />
                    <SliceZone slices={props.data.prismicEmail.data.body} components={components} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const Head = (props) => {
  console.log(props)
  return(
  <>
      <title>{props.data.prismicEmail.data.title.text}</title>
      <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
  </>
  )
}

export default EmailPage