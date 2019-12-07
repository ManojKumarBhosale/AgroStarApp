import React from 'react';
import {FaShoppingBag} from 'react-icons/fa';
import {IoMdToday} from 'react-icons/io';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position:fixed;
  bottom: 0;
  left:0;
  height: 3.5rem;
  width:100%;
  background-color: white;
  display:flex;
  align-items:center;
`;

const Context = styled.span`
  flex:1;
  text-align:center;
  height:100%;
  line-height:2.5rem;
  box-sizing: border-box;
  cursor:pointer;

  ${props => props.isSelected ? `color:green;` : `color:lightgray;`}
`;

const ContextNameDiv = styled.div`
  margin-top: -1.2rem;
`;

const Footer = () => {
  return(
    <FooterContainer>
      <Context isSelected={true}> 
        <IoMdToday />
        <ContextNameDiv> Products </ContextNameDiv>
      </Context>
      <Context isSelected={false}>
        <FaShoppingBag />
        <ContextNameDiv> My Orders </ContextNameDiv>
      </Context>
    </FooterContainer>
  );
};

export default React.memo(Footer);