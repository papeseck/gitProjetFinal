import {configureStore} from "@reduxjs/toolkit";
import {applyMiddleware} from 'redux'
//import thunk from 'redux-thunk'; 
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore ({
    reducer : {
        //cart : CardSlice
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CardSlice),
   
});
setupListeners(store.dispatch())