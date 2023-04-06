import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const CallOut = (props) => {
    console.log(props)
    return (
        <div class="callout">
        <h3>{props.slice.primary.callout.document.data.title.text}</h3>
        <PrismicRichText field={props.slice.primary.callout.document.data.content.richText} />
        </div>
    )
}