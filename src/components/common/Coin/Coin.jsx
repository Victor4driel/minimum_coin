import React from "react"
import './Coin.styled.js'
import { Coin, Value } from "./Coin.styled.js"

export default props => {
    return (    
            <Coin>
                <Value>${props.value}</Value>
            </Coin>        
    )
}