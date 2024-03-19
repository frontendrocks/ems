import React, { useEffect, useState } from 'react'
import Loader from '../common/Loader';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

function ListEmployee() {
   const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5001/employee')
            .then((response) => {
                setEmployee(response.data.data)
                setLoading(false);
            }).catch((error) => {
            console.log(error);
        })
    }, []);
  
  const deleteEmployee = (delId) => {
    if (window.confirm("Do you want to delete?"))
    { 
      setLoading(true);
    axios.delete(`http://localhost:5001/employee/${delId}`).then(() => {
      setLoading(false);
      setEmployee(employee.filter((post) => { return post._id !== delId }))
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    })
    }
    
  }

  return (
    <div className=" w-full">
      <Header />
      <div className="">
      {loading ? (<Loader />) : (
        <div className="w-full mx-auto  card  rounded-md">
           <h1 className=" flex align-middle justify-center font-bold text-gray-800 text-2xl font-sans">Employee List <span class="material-symbols-outlined mt-1 mx-2">
list_alt
</span></h1>
         <div className="flex align-middle text-blue-700 mr-2 font-bold float-end text-lg cursor-pointer">Add<Link to='/addemployee'><span class="material-symbols-outlined ">add</span></Link></div> 
          <table className="w-full border-seprate border table-auto bg-gray-300 rounded">
        <thead>
           <tr className="odd: bg-blue-800 text-white rounded-md">
          <th className="border border-slate-500 w-20">SR. No</th>
          <th className="border border-slate-500">Name</th>
          <th className="border border-slate-500">Email</th>
                <th className="border border-slate-500">Phone</th>
                          <th className="border border-slate-500">Address</th>
          <th className='border border-slate-500 w-25'>Actions</th>
        </tr>
        </thead>
        
        <tbody>
          {employee.map((employeeItem, index) => (<tr key={employeeItem._id} className="even: bg-violet-400 odd:bg-white ">
             <td className="border border-slate-500 text-black text-center">{index+1}</td>
            <td className="border border-slate-500 text-center">{employeeItem.name}</td>
            <td className="border border-slate-500 text-center">{employeeItem.email}</td>
            <td className="border border-slate-500 text-center">{employeeItem.phone}</td>
                        <td className="border border-slate-500 text-center">{employeeItem.address}</td>
            <td className="border border-slate-500 text-center cursor-pointer"><Link to={`/editemployee/${employeeItem._id}`}><span class="material-symbols-outlined text-blue-700">edit</span></Link>&nbsp;
              <button onClick={() => deleteEmployee(employeeItem._id)}>
                 <span class="material-symbols-outlined text-red-700">delete</span>
              </button>
            </td>
          </tr>))}
        </tbody>
      </table>
        </div>
        )}
      </div>
      <Footer />
    </div>
    
  )
}

export default ListEmployee
