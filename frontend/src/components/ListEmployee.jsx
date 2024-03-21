import React, { useEffect, useState } from 'react'
import Loader from '../common/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BASE_URL } from '../common/BaseUrl';

function ListEmployee() {

  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState([]);
  const no_of_record_per_page = 10;
  

  // For pagination
  useEffect(() => {
     setFilterData(
       employee.filter((item, index) => {
         return index < no_of_record_per_page * page && index >= no_of_record_per_page * (page - 1);
       })
     );
  }, [employee, page]);

  // For loading
    useEffect(() => {
      setLoading(true);
       loadEmployee();
    }, []);
  
  // For filtering
  useEffect(() => {
      const filtered = filterData && filterData.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
    );
    if (query) {
      setPage(page);
      setFilterData(filtered);
    } else {
      loadEmployee();
    }
  }, [query,page]);
  

  const loadEmployee = () => {
    axios.get(`${BASE_URL}employee`)
      .then((response) => {
        setEmployee(response.data.data)
        setLoading(false);
      }).catch((error) => {
        console.log(error);
      });
  }
 

  const deleteEmployee = (empDeleteId) => {
    if (window.confirm("Do you want to delete?"))
    { 
      setLoading(true);
      axios.delete(`${BASE_URL}employee/${empDeleteId}`)
        .then(res => {
          if (res) {
            setLoading(false);
            const employeeData = employee.filter((post) => { return post._id !== empDeleteId });
            setFilterData(employee);
            setPage(1);
          }
        });
    }
  }



  return (
    <div className=" w-full">
      <Header />
      <div className="">
      {loading ? (<Loader />) : (
          <div className="w-full  card rounded-md">
            
            <div className="flex align-bottom">
              <div className="w-2/3">
            <h1 className="font-bold text-gray-800 text-2xl font-sans mx-36 flex justify-end">
              Employee List<span class="material-symbols-outlined mx-2 mt-2">list_alt</span>
            </h1>
              </div>

            <div className="w-1/3  flex justify-end">
                <div className="flex align-middle">
                  <input
                    className="rounded-sm border border-slate-300 p-2 mx-2"
                    type="text"
                    placeholder="Search By Name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex align-middle text-blue-700 mr-2 font-bold float-end text-lg cursor-pointer">
              <Link to='/addemployee'>Add<span class="material-symbols-outlined">add</span></Link></div> 
              </div>
            </div>
            </div>
            
      
            
          <table className="w-full border-seprate border table-auto bg-gray-300 rounded mt-4">
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
          {filterData && filterData.map((employeeItem, index) => (<tr key={employeeItem._id} className="even: bg-violet-400 odd:bg-white ">
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
            <div className="flex mx-12 mt-4 justify-center">
                <ReactPaginate
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                onPageChange={(event) => setPage(event.selected + 1)}
                breakLabel="..."
                pageCount={Math.ceil(employee.length / no_of_record_per_page)}
                previousLabel={
                  <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                    <AiFillLeftCircle />
                  </IconContext.Provider>
                }
                nextLabel={
                  <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                    <AiFillRightCircle />
                  </IconContext.Provider>
            }
          />
            </div>
            
        </div>
        )}
      </div>
      <Footer />
    </div>
    
  )
}

export default ListEmployee
