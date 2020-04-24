import {FETCHING_REQUEST, FETCHING_FAIL, FETCHING_SUCCESS} from './types';

export const fetchingItemsRequest = ()=>({type:FETCHING_REQUEST})

export const fetchingItemsSuccess =(json)=>({
    type:FETCHING_SUCCESS,
    payload:json
})

export const fetchingItemsFail =()=>({
    type:FETCHING_FAIL,
    payload:error
})

export const fetchItems = ()=>{
    return async dispatch =>{
        dispatch(fetchingItemsRequest())
        try{
            let response = await fetch('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043')
            let json = await response.json()
            dispatch(fetchingItemsSuccess(json))
        }catch (error){
            dispatch(fetchingItemsFail(error))
        }
    }
}