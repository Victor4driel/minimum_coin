import React from "react"
import './Coin.styled.js'
import { Coin, Value } from "./Coin.styled.js"

export default props => {
    const centsOrReal = value => {
       if(value >= 100) {
            return `R$${value/100}`
       }

       return `${value}c`
    }
    return (    
            <Coin>
                <Value>{centsOrReal(props.value)}</Value>
            </Coin>        
    )
}