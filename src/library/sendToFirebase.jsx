import React,{useEffect } from "react";
import {getFirestore,collection,addDoc } from 'firebase/firestore';


export function finishOrder(clientName,clientPhone,clientEmail,cart,getID){

let order={
    buyer:{
        clientName:clientName,
        phone:clientPhone,
        email:clientEmail
    },
        order:cart  
    }

const db=getFirestore();

const ordersCollection= collection(db,"orders");
addDoc(ordersCollection,order).then(({id})=> getID(id));

}
