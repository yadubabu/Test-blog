import { combineReducers } from "redux";
import postReducers from "./postReducers";
import userReducer from "./userReducer";
// const count=100;
// const initialPost={
//     post:{},
// }
// const indReducer=()=>{return count+1}
// const getPostReducer=(post=initialPost,action)=>{
//     if(action.type==='FETCH_POSTS'){
//         return {...post.post,post:action.payload};
//     }
//     return post;
// }
// const decCount=()=>{return count-1}
 export default combineReducers({
     posts:postReducers,
     users:userReducer,
    //  count:indReducer,
    //  decCount:decCount,
    //  fetchPosts:getPostReducer,
 })
   
