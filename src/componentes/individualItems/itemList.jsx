//Este archivo hace la vista preeliminar del producto, solo con el precio y titulo
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCard } from './item.jsx';
import { LandingPage } from '../landingPages/landingPage.jsx';
import { GetFirstPicture } from '../../library/library.jsx';

export function ItemList({productList,loading,error}){
    
    return(
        <>
        {loading && productList.length===0 && <LandingPage message={'Loading...'}></LandingPage>}
        {/* El condicional de arriba es para iterar los datos de dos formas distintas, cuando los productos son mas que uno o uno*/}
        {productList.length!==0 ? productList.map((product,index)=>
            <Link to={`/react_alegrecristian/itemDetail/${product.apiId}`} key={product.apiId} style={{textDecoration:'none'}}> <ItemCard  title={product.title} description={product.description} price={product.price} pictureURL={GetFirstPicture(product.picture0)} stock={product.stock} ></ItemCard></Link>): !loading && <LandingPage message={'No tenemos esos articulos, pero ya mismo'}></LandingPage>
        }
        {error && <LandingPage message={error}></LandingPage>}
        </>
    )
}


