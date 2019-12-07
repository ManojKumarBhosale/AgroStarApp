import React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position:fixed;
  top: 0;
  left: 0;
  height: 2.5rem;
  width:100%;
  background-color: white;
  padding:0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
const IconContainer = styled.span`
  margin-left:auto;
`;

const RefreshIcon = styled(IoMdRefresh)`
  padding:0.3rem;
`;

const UserIcon = styled(FaUserPlus)`
  padding:0.3rem;
`;

const Header = ({companyName, onRefresh}) =>{
  return(
    <HeaderContainer> 
      <span> {companyName} </span> 
      <IconContainer>
        <RefreshIcon onClick={onRefresh}/>
        <UserIcon />
      </IconContainer> 
    </HeaderContainer>
  )
};
export default React.memo(Header);