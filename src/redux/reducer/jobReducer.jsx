import { DETAIL_JOB_LIST, GET_CARI, GET_LIST_JOB, SEARCH_LIST_JOB } from "../action/jobAction";
import { GET_REGIS ,GET_REGIS_GOOGLE} from "../action/loginAction";
import { GET_LOGIN,GET_LOGIN_GOOGLE } from "../action/loginAction";

const innitialState ={
    getListJob : false,
    getListJobLoading : false,
    getListJobError : false,

    cari : false,
    cariLoading : false,
   
    searchListJob : false,
    searchListJobLoading : false,
    searchListJobError : false,
    
    detailListJob : false,
    detailListJobLoading : false,
    detailListJobError : false,

    getRegis : false,
    getRegisLoading : false,
    getRegisError : false,
   
    getLogin: false,
    getLoginLoading : false,
    getLoginError : false,

    getLoginGoogle: false,
    getLoginLoadingGoogle : false,
    getLoginErrorGoogle : false,

    getRegisGoogle: false,
    getRegisLoadingGoogle : false,
    getRegisErrorGoogle : false,
}

const job = (state = innitialState, action) =>{
    switch (action.type) {
        case GET_CARI :
            return {
                ...state,
                cari : action.payload.data,
                cariLoading : action.payload.loading,

            }
        case GET_REGIS :
            return {
                ...state,
                getRegis : action.payload.data,
                getRegisLoading : action.payload.loading,
                getRegisError : action.payload.errorMassage

            }
        case GET_LOGIN :
            return {
                ...state,
                getLogin : action.payload.data,
                getLoginLoading : action.payload.loading,
                getLoginError : action.payload.errorMassage

            }
        case GET_LOGIN_GOOGLE :
            return {
                ...state,
                getLoginGoogle : action.payload.data,
                getLoginLoadingGoogle : action.payload.loading,
                getLoginErrorGoogle : action.payload.errorMassage

            }
        case GET_REGIS_GOOGLE :
            return {
                ...state,
                getRegisGoogle : action.payload.data,
                getRegisLoadingGoogle : action.payload.loading,
                getRegisErrorGoogle : action.payload.errorMassage

            }
        case GET_LIST_JOB :
            return {
                ...state,
                getListJob : action.payload.data,
                getListJobLoading : action.payload.loading,
                getListJobError : action.payload.errorMassage
            }
        case SEARCH_LIST_JOB :
            return {
                ...state,
                searchListJob : action.payload.data,
                searchListJobLoading : action.payload.loading,
                searchListJobError : action.payload.errorMassage
            }
        case DETAIL_JOB_LIST :
            return {
                ...state,
                detailListJob : action.payload.data,
                detailListJobLoading : action.payload.loading,
                detailListJobError : action.payload.errorMassage,
                
            }
        default:
            return state;
    }
}

export default job