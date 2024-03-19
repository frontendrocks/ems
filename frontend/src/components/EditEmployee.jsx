import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

function EditEmployee() {
  const [formData, setFormData] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5001/employee/${id}`).then((res) => {
      setFormData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
       setLoading(false);
    })
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.put(`http://localhost:5001/employee/${id}`, formData).then(() => {
      setLoading(false);
      navigate('/employeeList')
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    });
    console.log(formData);

  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }


  return (
    <div>
      <Header />
        <Link to="/employeeList"><button className="flex align-middle justify-items-end rounded-md 
      float-end mx-12 bg-black px-4 py-1 my-1 text-white border">
      <span class="material-symbols-outlined">
arrow_back
</span>
      </button></Link>
       <div className="w-full card">
      <div className=" border-2 border-gray-500 w-[600px]  mx-auto p-4 rounded-md">
        <h1 className="flex align-middle justify-center font-bold text-gray-800 text-2xl font-sans">Update Employee</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
          <div className="my-1">
              <label htmlFor="name" className='text-sm text-gray-500 mr-4'>Name</label>
            <input type="text" required value={formData.name} className="w-full rounded-md p-2 border-2 border-gray-500"
              name="name" placeholder="Name" onChange={handleChange} />
          </div>

          <div className="my-4">
            <label htmlFor="email" className='text-sm text-gray-500 mr-4'>Email</label>
            <input type="email" required value={formData.email} className="w-full rounded-md p-2 border-2 border-gray-500"
              name="email" placeholder="Email" onChange={handleChange} />
          </div>
          
          <div className="my-4">
            <label htmlFor="phone" required className='text-sm  text-gray-500 mr-4'>Phone</label>
            <input type="text" required value={formData.phone} className="w-full p-2 rounded-md border-2 border-gray-500"
              name="phone" placeholder="Phone" onChange={handleChange} />
          </div>

          <div className="my-4">
            <label htmlFor="name" className='text-sm  text-gray-500 mr-4'>Address</label>
            <input type="text" required value={formData.address} className="w-full p-2 rounded-md border-2 border-gray-500"
              name="address" placeholder="Address" onChange={handleChange} />
          </div>
          
          <button type="submit" className="mx-auto text-xl rounded-md my-4 border-r-8 bg-blue-900 text-white w-full p-2 border-2 border-gray-950" >Update</button>
        </form>
      </div>
    </div>
    </div>
   
  )

}

export default EditEmployee;
