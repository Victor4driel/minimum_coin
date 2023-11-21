import React from "react"
import { GroupedButtonContainer } from "./GroupedButton.styled"
import Button from "../common/Button/Button"

export default props => {
    return (
        <GroupedButtonContainer>
            <Button onClick={props.funcInc} signal='+'/>
            <Button onClick={props.funcDec} signal='-'/>
        </GroupedButtonContainer>
    )
}