import React from "react"
import { BoxContainer } from "./Box.styled"

export default props => {
    return (
        <BoxContainer className={props.className}>
            {props.children}
        </BoxContainer>
    )
}