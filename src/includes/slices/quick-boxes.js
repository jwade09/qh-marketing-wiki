import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "gatsby";

export const QuickBoxes = (props) => {
    return (
        <div className="flex justify-content">
            {props.slice.items.map(item => {
            return (
                <Link to={`/${item.link.type}/${item.link.uid}/`} className="box g-2 flex justify-content" style={{color: (item.color)}}>
                    <div className="g-5 icon">
                        <i className={"fa-solid " + item.icon} />
                    </div>
                    <div className="g-8">
                        <h3>{item.qb_title.text}</h3>
                        <PrismicRichText field={item.qb_content.richText} />
                    </div>
                </Link>
            )
        })}
        </div>
        
    )
        
}