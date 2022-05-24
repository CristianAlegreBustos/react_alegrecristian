import React,{ useContext,createContext, useState } from "react";

export const contextCart = createContext(undefined);

function CartContextHOC({children}){

    const [cart,setCart]=useState([])

    function isInCart(item){
        if (cart.includes(item)){
            return true;
        }else{
            return false;
        }
    }

    const addItem = ( item ) => {

        if ( isInCart(item) ) {
    
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
        setCart([]);
    }

    return(
        <>
            <contextCart.Provider
            value={{cart,addItem,removeItem,clear}}
            >
                {children}
            </contextCart.Provider>
        </>
    )
}

export{CartContextHOC};