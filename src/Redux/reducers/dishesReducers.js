const dishes =  [];
export const dishesReducer = (state = dishes, action) => {
    switch (action.type) {
        case "GET_DISHES_SUCCEED":
            return action.payload
            break;
    }
    return state
}

