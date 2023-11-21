import React from "react"
import { Button } from "./Button.styled"

export default props => {
    return (

        <Button onClick={() => props.onClick()}>
            <span>
                {props.signal}
            </span>
        </Button>  
    )
}