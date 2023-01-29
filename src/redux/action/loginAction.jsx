import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
export const GET_REGIS = 'GET_REGIS'
export const GET_LOGIN = 'GET_LOGIN'

export  const userLogin = (data) => {
    const auth = getAuth();
    console.log('2. loading masuk action')
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("3.data masuk")
          dispatch({
            type: GET_LOGIN,
            payload: {
                loading: false,
                data: user,
                errorMassage: false
            }
        })
          // ...
        })
            .catch((error) => {
                console.log("3.gagal")
                dispatch({
                    type: GET_LOGIN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}
export  const userRegis = (data) => {
    const auth = getAuth();
    console.log('2. loading masuk action')
    return (dispatch) => {
        // loading 
        dispatch({
            type: GET_REGIS,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // get Api 
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("3.data masuk")
          dispatch({
            type: GET_REGIS,
            payload: {
                loading: false,
                data: user,
                errorMassage: false
            }
        })
          // ...
        })
            .catch((error) => {
                console.log("3.gagal")
                dispatch({
                    type: GET_REGIS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMassage: error.massage
                    }
                })
            })
    }
}


