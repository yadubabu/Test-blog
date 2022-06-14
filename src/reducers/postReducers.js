

export default(state=[],action)=>{
    switch(action.type){
        case 'FETCH_POSTS':
            return [...state,action.payload.data];
        default :
        return state;
    }
    
};