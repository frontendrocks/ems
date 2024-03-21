import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../common/BaseUrl';

function AddEmployee() {

  const [formData, setFormData] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Save emp data
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.post(`${BASE_URL}employee`, formData).then(() => {
      setLoading(false);
      navigate('/employeeList')
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    })
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
      <span class="material-symbols-outlined">arrow_back</span>
      </button></Link>
      <div className="w-full card">
        <div className=" border-2 border-gray-500 w-[600px]  mx-auto p-2 rounded-md">
       <h1 className="flex align-middle justify-center font-bold text-gray-800 text-2xl font-sans">Add Employee</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
          <div className="my-1">
              <label htmlFor="name" className='text-sm text-gray-500 mr-4'>Name</label>
             <input type="text" required className="w-full rounded-md p-2 border-2 border-gray-500" name="name" placeholder="Name" onChange={handleChange} />
          </div>

          <div className="my-2">
            <label htmlFor="email" className='text-sm text-gray-500 mr-4'>Email</label>
            <input type="email" required className="w-full rounded-md p-2 border-2 border-gray-500" name="email" placeholder="Email" onChange={handleChange} />
          </div>
          
          <div className="my-2">
            <label htmlFor="phone" className='text-sm text-gray-500 mr-4'>Phone</label>
            <input type="text" required className="w-full p-2 rounded-md border-2 border-gray-500" name="phone" placeholder="Phone" onChange={handleChange} />
          </div>

          <div className="my-2">
            <label htmlFor="address" className='text-sm text-gray-500 mr-4'>Address</label>
            <input type="text" required className="w-full p-2 rounded-md border-2 border-gray-500" name="address" placeholder="Address" onChange={handleChange} />
          </div>
          
          <button type="submit" className="mx-auto text-xl rounded-md my-4 border-r-8 bg-blue-900 text-white w-full p-2 border-2 border-gray-950" >Save</button>
        </form>
        </div>
        
      </div>
         <Footer />
    </div>
    
  )
}

export default AddEmployee

