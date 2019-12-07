import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import fetchProducts from "./api/ProductService";
import {AppContextProvider} from "./contexts/AppContext";
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: sans-serif;
  background-color: #d6d6d6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

class App extends Component {
  state = {
    productList: [],
    isLoading: true,
  }

  async componentDidMount(){
    const {productList} = await fetchProducts();
    this.setState({productList, isLoading:false});
  }

  handelRefresh = async () => {
    this.setState({isLoading: true});
    const {productList} = await fetchProducts()
    this.setState({productList, isLoading:false});
  }

  render() {
    const {isLoading, productList} = this.state;
    return (
      <AppContainer>
        <Header companyName="AgroStar" onRefresh= {this.handelRefresh} />
        <AppContextProvider>
          { isLoading ? 
            <div>Loading... </div> :
            <Main isLoading ={isLoading} productList = {productList} />
          }
        </AppContextProvider>
        <Footer />
      </AppContainer>
    );
  }
};

export default App;