import React, { Component } from 'react';
import Search from './Search';
import ProductList from './ProductList';
import Bag from './Bag';
import {AppContextConsumer} from '../contexts/AppContext';
import styled from 'styled-components';

const MainContainer = styled.main`
  position: absolute;
  top: 2.5rem;
  left:0;
  width:100%;
  height: calc(100% - 6rem);
  padding:0.5rem;
  box-sizing: border-box;
`;

class Main extends Component{
  state = {
    filterText: ""
  } 

  handleSearch = (searchText) => {
    this.setState({filterText:searchText});
  }

  getFilteredProductList = (products) => {
    const filterText = this.state.filterText;
    if(filterText !== "")
      return products.filter(product =>
         product.productName.toLowerCase().includes(filterText.toLocaleLowerCase()));
    return products;
  }

  render(){
    return(
      <MainContainer>
        <Search searchHandler = {this.handleSearch} />
        <AppContextConsumer>
          {
            ({kartData,add,remove}) => (
              <>
                <ProductList 
                  list={this.getFilteredProductList(this.props.productList)}
                  bagItems = {kartData.bagItems}
                  add={add} 
                  remove={remove}
                  filterText={this.state.filterText}
                  reduceMaxheight={kartData.totalItems > 0 ? true : false}
                />
                <Bag totalItems={kartData.totalItems} 
                  totalPrice={kartData.totalPrice}
                 />
              </>
            )
          }
        </AppContextConsumer>
      </MainContainer>
    );
  }
};

export default Main;