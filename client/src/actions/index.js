import axios from 'axios';

export const fetchQueryData=(id)=>{

    return async (dispatch)=>{
        const response=await axios.get(`/fetch/${id}`);
        dispatch({type:"FETCH_DATA",payload: response.data});
    };
};

