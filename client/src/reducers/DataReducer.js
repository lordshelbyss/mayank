export const dataReducer=(state=null,action)=>{
    switch(action.type){
        case "FETCH_DATA":
            return action.payload;
        default:
            return state;
    }
};