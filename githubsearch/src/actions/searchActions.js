import {GET_SEARCH, SEARCH_ERROR} from '../types'
import axios from 'axios'

export const getSearchResults = (searchQuery, pageNumber) => async dispatch => {
    console.log(searchQuery, pageNumber)
    try{
        const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&page=${pageNumber}&per_page=5`);
        console.log(res);
        dispatch( {
            type: 'GET_SEARCH',
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: SEARCH_ERROR,
            payload: console.log(e),
        })
    }

}