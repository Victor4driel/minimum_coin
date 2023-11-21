import React from "react"
import './GroupedCoins.styled.js'
import Coin from "../common/Coin/Coin.jsx"
import Label from "../common/Label/Label.jsx"
import { GroupedCoins } from "./GroupedCoins.styled.js"


export default props => {
    function coins() {
        return props.coins.map(coin =>
            <Coin value={coin} />
        )
    }

    return (

        <GroupedCoins className={`GroupedCoins ${props.className}`} width={props.width}>
            {coins()}
        </GroupedCoins>

    )
} 