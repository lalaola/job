import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleUserRegis, userRegis } from '../../redux/action/loginAction';
import Loading from '../loading';

const FormRegis = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [displayName, setdisplayName] = useState('');

    const dispatch = useDispatch()
    const { getRegis, getRegisLoading, getRegisError ,getRegisGoogle} = useSelector((state) => state.JobReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userRegis({ email: email, password: password ,displayName:displayName}))
    }
    const handleSubmitGoogle = (e) => {
        e.preventDefault()
        dispatch(googleUserRegis())
    }
    useEffect(() => {
        // paggil
        if (getRegis) {
            setEmail('')
            setPass('')
        }
    }, [dispatch, getRegis])


    return (
        <div>
            <form>
                <div class="mb-3">
                    <input type="text" 
                    onChange={((e) => {
                        setdisplayName(e.target.value)
                    })}
                    class="form-control" id="username" placeholder='username'/>
                </div>
                <div className="mb-3">
                    <input type="email" onChange={((e) => {
                        setEmail(e.target.value)
                    })} value={email} className="form-control" id="exampleInputEmail1" placeholder='email' aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <input type="password" onChange={((e) => {
                        setPass(e.target.value)
                    })} value={password} className="form-control" id="exampleInputPassword1" placeholder='password' />
                </div>
                {getRegis ? <div className="alert alert-success" role="alert">
                    Selamat akun anda telah berhasil dibuat
                </div> : getRegisLoading ? <Loading/> : getRegisError ? <div className="alert alert-danger" role="alert">
                    Silahkan Cek kembali Email/Password anda</div> : ''}
                <div className="submit d-flex align-items-center">
                    <a onClick={handleSubmit} className="btn btn-yellow me-3">Regis</a>
                    or

                    <a className="btn" onClick={handleSubmitGoogle}>Login With Google j</a>
                </div>
            </form>
        </div>
    );
}

export default FormRegis;
