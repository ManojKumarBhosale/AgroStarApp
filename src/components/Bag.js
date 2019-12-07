import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
    z-index: 10;
    text-align: center;
    background-color: green;
    color:white;
    bottom: 0;
    left: 0;
    position: absolute;
    width: calc(100% - 2rem);
    margin: 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
    padding:0 0.5rem;
    box-sizing:border-box;
`;

const Bag = ({totalPrice, totalItems}) => {
    const itemString = totalItems >1 ? "items" : "item";
    return (  
        <Conatiner 
            style={{display: totalItems > 0 ? "block" : "none"}}
        > 
            <span style={{float:"left"}}>
                {totalItems} {itemString} | Rs. {totalPrice}
            </span>
            <span style={{float:"right"}}>
                View Bag >
            </span>
        </Conatiner>  
     );
}
 
export default Bag;