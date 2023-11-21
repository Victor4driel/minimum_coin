import styled from "styled-components"

export const ContentConteiner = styled.div`
box-sizing: border-box;
width: 100%;
height: 100%;
display: grid;
padding-top: 50px;
justify-items: center;
grid-template:  
    "CoinWithLabel GroupedCoinsAvailable" 
    "GroupedCoinsResult GroupedCoinsResult" 
;
.CoinLabel {
    grid-area: CoinWithLabel
}

.GroupedCoinLabel {
    grid-area: GroupedCoinsAvailable
}

.ResultCoinLabel {
    grid-area: GroupedCoinsResult
}


`