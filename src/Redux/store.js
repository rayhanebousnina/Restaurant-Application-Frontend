// import {createStore, applyMiddleware , combineReducers} from "redux";
// import thunk from "redux-thunk";
// import {dishesReducer} from "./reducers/dishesReducers"


// const store = createStore( combineReducers=
//     {dishesReducer},applyMiddleware(thunk));

// export default store

import { createStore, applyMiddleware, combineReducers } from "redux";
// import  composeWithDevTools  from "redux-devtools-extension";
import thunk from "redux-thunk";
import {customersReducer} from "./reducers/customersReducers"
import { dishesReducer } from "./reducers/dishesReducers";

const Reducers = combineReducers({
    customers: customersReducer,
    dishesstore : dishesReducer 
})

const store = createStore( Reducers,  applyMiddleware(thunk))
   

export default store