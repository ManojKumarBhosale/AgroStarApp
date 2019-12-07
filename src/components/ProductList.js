import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const NoProductsDiv = styled.div`
  text-align: center;
  line-height: 10rem;
`;

const ProductListContainerDiv = styled.div`
  display:grid;
  grid-template-columns: 25% 25% 25% 25%;
  max-height: calc(100% - 1.2rem);
  overflow: auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 100%;
  }
`;

const ProductList = ({list, add, remove, bagItems, reduceMaxheight}) => {
  return (
    list.length == 0 ?
    <NoProductsDiv> 
      No Product by such name 
    </NoProductsDiv> :
    <ProductListContainerDiv style={{maxHeight: reduceMaxheight && "calc(100% - 5rem)"}}> 
      {
        list.map(product => 
          <Product key={product.skuCode} 
              details={product} 
              add={add}
              remove={remove}
              quantity= {bagItems[product.skuCode] ? 
                bagItems[product.skuCode].quantity : 0
              }
          />
        )
      }
    </ProductListContainerDiv>
  );
};

export default ProductList;