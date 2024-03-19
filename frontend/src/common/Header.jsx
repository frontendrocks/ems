import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <nav
        className="relative flex w-full flex-nowrap items-center justify-between  bg-gray-300 py-2 
         text-black-300 shadow-dark-mild hover:text-neutral-700
          focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3 ">
          <div className="ms-2">
            <Link className="text-xl text-black dark:text-white font-bold" to="/">EMS</Link>
          </div>
    
          <div
            className="mt-2 flex flex-grow  items-center lg:mt-0 md:!flex md:basis-auto"
            id="navbarSupportedContent2"
            data-twe-collapse-item>
     
            <ul
              className=" list-style-none flex my-2 mx-4  max-w-screen-xl"
              data-twe-navbar-nav-ref>
       
              <li
                className=" ps-2 mx-2 "
                              data-twe-nav-item-ref>
                              <Link to="/">Home</Link>
                
              </li>
        
              <li
                className=" mx-2 "
                data-twe-nav-item-ref>
                 <Link to="/employeeList">Employee List</Link>
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Header
