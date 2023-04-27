import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Assets = (props) => {
    console.log(props)
    return (
        <div className="flex wrap gap">
                {props.slice.items.map(item => {
                return (
                    <a href={item.link.raw.url} target="_blank" className="asset">
                        <GatsbyImage image={getImage(item.image)} className="asset-sample" />
                        <p>{item.asset_content.text}</p>
                    </a>
                )
            })}
        </div>
    )
}