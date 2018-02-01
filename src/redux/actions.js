/*包含所有action creator*/
import {DECREMENT, INCREMENT} from "./action-types";

//同步action返回一个对象，
//异步action但会一个函数
export const increment = (num)=>({ type:INCREMENT, data:num })
export const decrement = (num)=>({ type:DECREMENT, data:num })
export const incrementAsync = (num) =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(increment(num))
        },1000)
    }
};
// export const incrementAsync = (num) =>(
//     dispatch=> {
//         setTimeout(()=>{
//             dispatch(increment(num))
//         },1000)
//     }
// )
