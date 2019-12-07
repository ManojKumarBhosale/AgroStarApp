import React from 'react';
import Add_Button from './Add_Button';
import styled from 'styled-components';

const ProductDiv = styled.div`
  display:inline-block;
  min-height:310px;
  height:310px;
  background-color: white;
  padding:0.5rem;
  box-sizing:border-box;
  width:100%;
`;

const ProductContainer = styled.div`
  margin:0.5rem;
`;

const ImageContainer = styled.div`
  height:70%;
  background: #c7c3c3;
`;

const Description = styled.div`
  font-size:small;
  margin-top: 0.3rem;
  min-height: 2rem;
`;

const Price = styled.div`
  font-size: medium ;
  margin-top: 0.3rem;
`;

const ButtonContainer = styled.div`
  margin-top: 0.3rem;
  border:1px solid green;
  color: green;
  display: flex;
  text-align: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
`;

const OfferDiv = styled.div`
  background-color: goldenrod;
  font-size: small;
  float: left;
  padding: 0.2rem;
  box-sizing: border-box;
  height: 1.5rem;
  transform: translate3d(0px, 8px, 10px);
  border-radius: 1px 5px 5px 0px;
`;

const Product = ({details, add, remove, quantity}) => {
  const addHandler = () => {
    add({
      skuCode : details.skuCode,
      quantity : quantity +1,
      price: details.sellingPrice
    });
  }

  const removeHandler = () => {
    remove({
      skuCode : details.skuCode,
      quantity : quantity - 1,
      price: details.sellingPrice
    });
  }

  const src = details.productImages[0] && details.productImages[0].name;
  return(
    <ProductContainer>
      <OfferDiv style={{display: !details.defaultOffer && "none"}} >
          {details.defaultOffer}
      </OfferDiv>
      <ProductDiv style={{marginTop: details.defaultOffer && "-1.5rem"}}>
        <ImageContainer>
          <Image src={src} alt= {details.productName} />
        </ImageContainer>
        <Description>
          {details.productName}
        </Description>
        <Price>
          Rs. {details.sellingPrice}
        </Price>
        <ButtonContainer>
          <Add_Button quantity={quantity} add={addHandler} remove={removeHandler} />
        </ButtonContainer>
      </ProductDiv>
    </ProductContainer>
  );
};
export default React.memo(Product);