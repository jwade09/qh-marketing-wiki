import React from "react"
import Layout from "../../includes/layout"
import { graphql, Link } from "gatsby"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { components } from "../../includes/slices"


export const emi = graphql`
    query Ads($id: String) {
        prismicAds(id: {eq: $id}) {
            data {
                content {
                  richText
                }
                title {
                  richText
                  text
                }
                body {
                  ... on PrismicAdsDataBodyAssets {
                    id
                    slice_label
                    slice_type
                    items {
                      asset_content {
                        text
                      }
                      image {
                        gatsbyImageData(layout: CONSTRAINED)
                      }
                      link {
                        raw
                      }
                    }
                  }
                  ... on PrismicAdsDataBodyRichContent {
                    slice_type
                    slice_label
                    primary {
                      rich_content {
                        text
                      }
                    }
                  }
                    ... on PrismicAdsDataBodyCallout {
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
            allPrismicAds(sort: {data: {order: ASC}}) {
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

const AdsPage = (props) => {
    
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
                        <p className="acc nav-active"><strong>Ad templates</strong></p>
                        <div className="type-selected">
                        {props.data.allPrismicAds.nodes.map(node => (
                            <div className="nav-item"><Link key={node.uid} to={`/ads/${node.uid}/`} activeClassName="active">{node.data.title.text}</Link></div>
                        ))}
                        </div>
                        </div>
                    </nav>
                    <div className="content white well gutter seo">
                    <PrismicRichText field={props.data.prismicAds.data.content.richText} />
                    <SliceZone slices={props.data.prismicAds.data.body} components={components} />
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
      <title>{props.data.prismicAds.data.title.text}</title>
      <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
  </>
  )
}

export default AdsPage