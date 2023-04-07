import React from "react"
import Layout from "../../includes/layout"
import { graphql, Link } from "gatsby"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { components } from "../../includes/slices"


export const webi = graphql`
    query Seo($id: String) {
        prismicSeo(id: {eq: $id}) {
            data {
                content {
                  richText
                }
                title {
                  richText
                  text
                }
                body {
                    ... on PrismicSeoDataBodyCallout {
                      id
                      primary {
                        callout {
                          id
                          document {
                            ... on PrismicCalloutSeo {
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
            allPrismicSeo(sort: {data: {order: ASC}}) {
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

const SeoPage = (props) => {
    
    return (
        <Layout>    
            <section className="gradient-grey">
                <div className="wrapper flex">
                    <nav className="well r gutter">
                        
                        <p className="acc nav-active"><strong>SEO</strong></p>
                        <aside>
                        {props.data.allPrismicSeo.nodes.map(node => (
                            <div className="nav-item"><Link key={node.uid} to={`/seo/${node.uid}/`} activeClassName="active">{node.data.title.text}</Link></div>
                        ))}
                        </aside>
                        <div className="nav-section">
                            <p>
                                <Link className="acc" to="/email/email-overview/"><strong>Email templates</strong></Link>
                            </p>
                        </div>
                    </nav>
                    <div className="content white well gutter seo">
                    <PrismicRichText field={props.data.prismicSeo.data.content.richText} />
                    <SliceZone slices={props.data.prismicSeo.data.body} components={components} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const Head = (props) => {
    return(
    <>
        <title>{props.data.prismicSeo.data.title.text}</title>
        <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
    </>
    )
}

export default SeoPage