import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/action/loginAction';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
   
    const dispatch = useDispatch()
    // const {getLogin} = useSelector((state) => state.JobReducer)
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('email',email,password)
        dispatch(userLogin({email:email,password:password}))
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <input onChange={((e)=>{
                        setEmail(e.target.value)
                    })} type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="password" 
                    onChange={((e)=>{
                        setPass(e.target.value)
                    })}
                    value={password} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="submit d-flex align-items-center">
                    <button onClick={handleSubmit}className="btn btn-yellow me-3">Login</button>
                    or

                    <a  className="btn">Login With Google</a>
                </div>
            </form>
        </div>
    );
}

export default Form;
