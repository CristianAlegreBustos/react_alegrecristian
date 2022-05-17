import React from 'react';
import { ItemCard } from './item.jsx';

export function ItemList({productList,loading,error}){
    console.log(productList);
    console.log(loading);
    console.log(error);
    return(
        <>
        {loading && "loading..."}
        {productList.map((product)=>
            <ItemCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} pictureURL={product.pictureURL} stock={product.stock}></ItemCard>)}
        {error && error}
        </>
    )
}


