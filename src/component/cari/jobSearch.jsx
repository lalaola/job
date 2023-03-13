import React,{useState}from 'react';
import { cariJob, searchJobList } from '../../redux/action/jobAction';
import { useDispatch } from 'react-redux';

const JobSearch = () => {
    const dispatch = useDispatch()
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = ()=>{
        dispatch(cariJob({desc:description,location:location,type:type}))
    }

    return (
        <div className='cari text-center text-white p-5 d-flex align-items-center'>
            <div className='col-12'>
                <h2 >Jelajahi 5000+ pekerjaan baru setiap bulan!</h2>
                <div className="row pt-4">
                    <div className="col-md-4 col-sm-6">
                        <input onChange={((e)=>{
                            setDescription(e.target.value)
                        })} className="form-control" type="text" value={description} aria-label="readonly input example" placeholder='Cari Lowongan' />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <input
                        onChange={((e)=>{
                            setLocation(e.target.value)
                        })}
                         className="form-control" type="text" value={location} aria-label="readonly input example" placeholder='Lokasi pekerjaan' />
                    </div>
                    <div className="col-md-2 col-sm-6 menu-type">
                        <select value={type}  onChange={((e)=>{
                            setType(e.target.value) 
                        })} className="form-select" aria-label="Default select example">
                            <option value="Full">Full Time</option>
                            <option value="Part">Part Time</option>
                        </select>
                    </div>
                    <div className="col-md-2 col-sm-6 btn-cari">
                        <button onClick={handleSubmit} className='btn btn-dark col-12'>Cari</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobSearch;
