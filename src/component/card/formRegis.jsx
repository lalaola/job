import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegis } from '../../redux/action/loginAction';

const FormRegis = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
   
    const dispatch = useDispatch()
    const {getRegis} = useSelector((state) => state.JobReducer)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('email',email,password)
        dispatch(userRegis({email:email,password:password}))
    }
    console.log(getRegis)
    useEffect(() => {
        // paggil
        if(getRegis){ 
            setEmail('')
            setPass('')
        }
    }, [dispatch,getRegis])


    return (
        <div>
            <form>
                {/* <div class="mb-3">
                    <input type="text" class="form-control" id="username" placeholder='username'/>
                </div> */}
                <div className="mb-3">
                    <input type="email" onChange={((e)=>{
                         setEmail(e.target.value)
                    })} value={email} className="form-control" id="exampleInputEmail1" placeholder='email' aria-describedby="emailHelp" />
                </div>
                
                <div className="mb-3">
                    <input type="password" onChange={((e)=>{
                         setPass(e.target.value)
                    })} value={password} className="form-control" id="exampleInputPassword1"  placeholder='password' />
                </div>
                {getRegis ?<div class="alert alert-success" role="alert">
                Selamat akun anda telah berhasil dibuat 
                </div> : ''}
                
                <div className="submit d-flex align-items-center">
                    <a onClick={handleSubmit}  className="btn btn-yellow me-3">Regis</a>
                    or

                    <button className="btn">Login With Google</button>
                </div>
            </form>
        </div>
    );
}

export default FormRegis;
