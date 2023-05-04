import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const RichContent = (props) => {
    console.log(props)
    return (
        <PrismicRichText field={props.slice.primary.rich_content.richText} />
    )
}