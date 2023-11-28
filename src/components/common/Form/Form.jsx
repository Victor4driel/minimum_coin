import React from "react"
import Label from "../Label/Label"
import Input from "../Input/Input"
import { FormContent } from "./Form.styled"

export default props => {
    return (
        <FormContent>
            <Label text={props.labelText}></Label>
            <Input value={props.value} setValue={props.setValue} />
        </FormContent>
    )
}