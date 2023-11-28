import React, { useState } from "react"
import GroupedCoins from "../GroupedCoins/GroupedCoins";
import { ContentConteiner } from "./Content.styled";
import { BoxContainer } from "../common/Box/Box.styled";
import Label from "../common/Label/Label";
import Form from "../common/Form/Form";

// Função baseada em uma solução encontrada no seguinte link: https://www.enjoyalgorithms.com/blog/minimum-coin-change
// O autor do artigo/post: Shubham Gautam

function minCoinChange(coins, k) {
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

    var changeValue = 0

    console.log(Math.trunc(((Inputvalue1 - Inputvalue) + 0.001 ) * 100))
    
    if(Math.trunc(((Inputvalue1 - Inputvalue) + 0.001 ) * 100) >= 0) {
        changeValue = Math.trunc(((Inputvalue1 - Inputvalue) + 0.001 ) * 100) 
    }

    const coinsAvailable = [1, 5, 10, 25, 50, 100]

    const changeCoins = minCoinChange(coinsAvailable, changeValue)

    return (
        <ContentConteiner>
            <BoxContainer className="GroupedCoinLabel">
                <Label text='Moedas Disponíveis (Centavos)' />
                <GroupedCoins className= 'available' coins={coinsAvailable} width='750px'/>
            </BoxContainer>
            <BoxContainer className="ResultCoinLabel">
                <Label text='Troco (Centavos)' />
                <GroupedCoins className='result' coins={changeCoins} width='100%'/>
            </BoxContainer>
            <BoxContainer>
                <Form value={Inputvalue} setValue={setInputValue} labelText='Valor Total'></Form>
                <Form value={Inputvalue1} setValue={setInputValue1} labelText='Valor Pago'></Form>
            </BoxContainer>
        </ContentConteiner>  
    )
}