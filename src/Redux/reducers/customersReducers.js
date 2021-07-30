export const customersReducer = (state = {customers :  []}, action) => {
    switch (action.type) {
        case "GET_CUSTOMERS_SUCCEED":
            state = {
                ...state,
                customers:[action.payload]
            }
            break;
    }
    return state
}