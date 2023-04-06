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
    console.log(props)
    return (
        <Layout title={props.data.title}>    
            <section class="gradient-grey">
                <div class="wrapper flex">
                    <nav class="well r gutter">
                        <div class="nav-section">
                            <p>
                                <Link className="acc" to="/seo/seo-overview/"><strong>SEO</strong></Link>
                            </p>
                        </div>
                        <p class="acc nav-active"><strong>Email templates</strong></p>
                        {props.data.allPrismicEmail.nodes.map(node => (
                            <div class="nav-item"><Link key={node.uid} to={`/email/${node.uid}/`} activeClassName="active">{node.data.title.text}</Link></div>
                        ))}
                    </nav>
                    <div class="content white well gutter seo">
                    <PrismicRichText field={props.data.prismicEmail.data.content.richText} />
                    <SliceZone slices={props.data.prismicEmail.data.body} components={components} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default EmailPage