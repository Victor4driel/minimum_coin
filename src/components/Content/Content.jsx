import React, { useEffect, useState } from "react"
import Coin from "../common/Coin/Coin";
import GroupedCoins from "../GroupedCoins/GroupedCoins";
import { ContentConteiner } from "./Content.styled";
import { BoxContainer } from "../common/Box/Box.styled";
import Label from "../common/Label/Label";
import GroupedButton from "../GroupedButton/GroupedButton";
import Input from "../common/Input/Input";
import Form from "../common/Form/Form";
import Button from "../common/Button/Button";

function miniCoinChangeWithCoins(coins, k) {
    if (k === 0) {
        return [0]; // Retorna um array contendo apenas o número mínimo de moedas
    }

    const change = new Array(k + 1).fill(Infinity);
    const coinsUsed = new Array(k + 1).fill(0);

    change[0] = 0;

    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                const currCount = change[i - coins[j]];
                if (currCount !== Infinity && currCount + 1 < change[i]) {
                    change[i] = currCount + 1;
                    coinsUsed[i] = coins[j];
                }
            }
        }
    }

    if (change[k] === Infinity) {
        return [-1]; // Retorna um array indicando que não é possível atingir a quantia
    } else {
        // Constrói o array de moedas usadas
        const usedCoins = [];
        let idx = change[k] - 1;
        let remainingAmount = k;
        while (remainingAmount > 0) {
            usedCoins[idx] = coinsUsed[remainingAmount];
            remainingAmount -= coinsUsed[remainingAmount];
            idx--;
        }
        return usedCoins;
    }
}

export default props => {

    const [Inputvalue, setInputValue] = useState(0)
    const [Inputvalue1, setInputValue1] = useState(0)

    var trocoValue = 0
    
    if(Math.trunc(((Inputvalue1 - Inputvalue) + 0.001 ) * 100) >= 0) {
        trocoValue = Math.trunc(((Inputvalue1 - Inputvalue) + 0.001 ) * 100) 
    }

    console.log(trocoValue)

    const coinsAvailable = [0.05, 10, 25, 50]

    const trocoCoins = miniCoinChangeWithCoins(coinsAvailable, trocoValue)

   
    // const inc = () => {
    //     setValue(value + 1);
    // }

    // const dec = () => {

    //     if(value > 0) {
    //         setValue(value - 1);
    //     }
    // }


    return (
        <ContentConteiner>
            <BoxContainer className="GroupedCoinLabel">
                <Label text='Moedas Disponíveis (Centavos)' />
                <GroupedCoins className= 'available' coins={coinsAvailable} width='750px'/>
            </BoxContainer>

            <BoxContainer className="ResultCoinLabel">
                <Label text='Resultado (Centavos)' />
                <GroupedCoins className='result' coins={trocoCoins} width='100%'/>
            </BoxContainer>

            <BoxContainer>
                <Form value={Inputvalue} setValue={setInputValue} labelText='Valor Total'></Form>
                <Form value={Inputvalue1} setValue={setInputValue1} labelText='Valor Pago'></Form>
                {/* <Button signal='Gerar Troco' onClick={gerarTroco}/> */}
            </BoxContainer>
           
            
        </ContentConteiner>  
    )
}