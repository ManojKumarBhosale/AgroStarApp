import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class AppContextProvider extends Component {
    state = {
            totalItems:0,
            totalPrice:0,
            bagItems:{}
    }
    
    handleAddToBag = (newItem) => {
        const newBagItems  = {...this.state.bagItems};
        const skuCode = newItem.skuCode
        const item = newBagItems[skuCode]
        if(item){
          const updatedItem = {...item};
          updatedItem.quantity++;
          newBagItems[skuCode] = updatedItem;
        }
        else{
          newBagItems[skuCode] = {
             quantity: 1,
             price: newItem.price
            }
        }
        this.setState({
          bagItems: newBagItems, 
          totalItems: this.state.totalItems+1,
          totalPrice: this.state.totalPrice + newItem.price
        });
      }
    
      handleRemoveFromBag = (newItem) => {
        const newBagItems  = {...this.state.bagItems};
        const skuCode = newItem.skuCode
        const item = newBagItems[skuCode]
        if(item){
          const updatedItem = {...item};
          updatedItem.quantity--;
          newBagItems[skuCode] = updatedItem;
    
          this.setState({
            bagItems: newBagItems, 
            totalItems: this.state.totalItems - 1,
            totalPrice: this.state.totalPrice - newItem.price
          });
        }
      }
    
    render() {
        debugger;
        return (
            <Provider value={{
                kartData: this.state,
                add: this.handleAddToBag,
                remove: this.handleRemoveFromBag
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {AppContextProvider, Consumer as AppContextConsumer}
