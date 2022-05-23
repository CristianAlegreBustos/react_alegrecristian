//Este archivo hace la vista preeliminar del producto, solo con el precio y titulo
import { style } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCard } from './item.jsx';
import { LandingPage } from './landingPage.jsx';

export function ItemList({productList,loading,error}){
    return(
        <>
        {loading && productList.length===0 && <LandingPage message={'Loading...'}></LandingPage>}
        {/* El condicional de arriba es para iterar los datos de dos formas distintas, cuando los productos son mas que uno o uno*/}
        {productList.length!==0 ? productList.map((product,index)=>
           <Link to={`/itemDetail/${product.apiId}`} style={{textDecoration:'none'}}> <ItemCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} pictureURL={product.pictureURL} stock={product.stock}></ItemCard></Link>): !loading && <LandingPage message={'No tenemos esos articulos, pero ya mismo'}></LandingPage>}
        {error && <LandingPage message={error}></LandingPage>}
        </>
    )
}


