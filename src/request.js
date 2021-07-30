import Axios from "axios"

import {
    GET_DISHES_API,
    ADD_DISHES_API,
    UPDATE_DISHES_API,
    DELETE_DISHES_API
} from "./Shared/apiURLs"

export const fetchDishes=()=>
    Axios.get(GET_DISHES_API,{
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }).then(res=>res.data)