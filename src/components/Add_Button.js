import React from 'react';
import styled from 'styled-components';

const GreenSpan = styled.span`
    background-color:lightgreen;
    text-align: center;
    min-width: 2rem;
`;

const QuantityDiv = styled.div`
    background-color:white;
    flex:1;
`;

const AddButtonSpan = styled.span`
    width:100%;
    font-size:medium;
    background-color:white;
    margin: 0.1rem;
`;

const Add_Button = ({quantity, add, remove}) => {
    return (
        <>
        {
            quantity > 0 ?
            <>
                <GreenSpan onClick={remove}> - </GreenSpan>
                <QuantityDiv> {quantity} </QuantityDiv>
                <GreenSpan onClick={add}> + </GreenSpan> 
            </>
            :
                <AddButtonSpan onClick={add}> Add </AddButtonSpan>
        }
        </>
     );
};
 
export default Add_Button;