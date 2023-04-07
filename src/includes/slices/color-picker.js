import React from "react";

export const ColorPicker = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.slice.primary.color_title.text}</h2>
            <div className="flex wrap">
                {props.slice.items.map(item => {
                return (
                    <div className="sample" onClick={() => {navigator.clipboard.writeText(item.color_hex)}}>
                        <div className="color-sample" style={{backgroundColor: (item.color_hex)}}></div>
                        <p>{item.color_hex}</p>
                    </div>
                )
        })}
        </div>
        </div>
        
    )
        
}