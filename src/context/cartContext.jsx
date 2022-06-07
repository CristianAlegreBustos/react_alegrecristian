import React,{createContext, useState } from "react";

export const contextCart = createContext(undefined);

function CartContextHOC({children}){

    const [cart,setCart]=useState([])
    const [orderID,setOrderId]=useState("")

    function isInCart( id ){
      return cart.some( _item => _item.id === id);
    }

    const addItem = ( item ) => {
      
        if ( isInCart(item.id) ) {
          
          const newCart = cart.reduce((acc, _item) => {
            
            if(item.id !== _item.id) {
              
              return acc.concat(_item);
            } else {
              
              return acc.concat({ ..._item, quantity: _item.quantity + item.quantity});
            }
          }, []);
          
          setCart(newCart);
          return;
        }
        const newCart = cart.concat(item);
        setCart(newCart);
        return;
      }
    
    const removeItem = (itemId)=>{
        const newCart = cart.filter(item=>item.id !== itemId );
        setCart(newCart);
    }

    const clear= ()=>{
        setCart([{
          quantity:0,
          price:0}]);
    }
    
    function getID(id){
      setOrderId(id)
    }

    return(
        <>
            <contextCart.Provider
            value={{cart,addItem,removeItem,clear, getID,orderID}}
            >
                {children}
            </contextCart.Provider>
        </>
    )
}

export{CartContextHOC};