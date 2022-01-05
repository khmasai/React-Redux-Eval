import {GET_SEARCH} from '../types'

const initialState = {
    searchResult:[],
    loading:true,
}

export default function(state = initialState, action){

    switch(action.type){

        case 'GET_SEARCH':
        return {
            ...state,
            searchResult:action.payload,
            loading:false
        }
        default: return state
    }

}