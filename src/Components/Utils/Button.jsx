import React from 'react'

const Button = ({ name, bgColour, textColour, outlineColour, outline, width }) => {
    return (
        <button style={
            {
                backgroundColor: bgColour,
                color: textColour,
                outlineColor: outlineColour,
                borderRadius: "14px",
                padding: "10px 16px",
                outline: (outline) ? "1px solid" : "none",
                border: "none",
                width: width,
                fontFamily: 'Geologica',
                fontWeight: '600',
                height: "40px",
                cursor: "pointer"
            }
        }
        >
            {name}
        </button>
    )
}

export default Button
