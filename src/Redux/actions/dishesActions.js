
import {fetchDishes} from '../../request'


export function getDishes() {
    return dispatch => {
        fetchDishes()
        .then (dishes => dispatch (
            {
                type: "GET_DISHES_SUCCEED",
                payload: dishes
            })
        )

        .catch(err => dispatch( 
            {
                type: "GET_DISHES_FAILED",
                payload: err
          })
        )
    }

}


// export const getDishes = (dishes) => {
//     return {
//         type: GET_DISHES,
//         payload: dishes,
//     }
// }

// export const deleteDish = (id) => {
//     return {
//         type: DELETE_DISH,
//         id,
//     }
// }