import React from "react"
import Layout from "../../includes/layout"
import { graphql, Link } from "gatsby"
import { PrismicRichText } from "@prismicio/react"


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
    console.log(props)
    return (
        <Layout title={props.data.title}>    
            <section class="gradient-grey">
                <div class="wrapper flex">
                    <nav class="well r gutter">
                        {/* <div class="nav-section">
                            <p>
                                <Link className="acc" to="/email/email-overview/"><strong>Email templates</strong></Link>
                            </p>
                        </div> */}
                        <p class="acc nav-active"><strong>SEO</strong></p>
                        {props.data.allPrismicSeo.nodes.map(node => (
                            <div class="nav-item"><Link key={node.uid} to={`/seo/${node.uid}/`} activeClassName="active">{node.data.title.text}</Link></div>
                        ))}
                    </nav>
                    <div class="content white well gutter seo">
                    <PrismicRichText field={props.data.prismicSeo.data.content.richText} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SeoPage