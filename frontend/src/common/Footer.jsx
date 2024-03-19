import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
 <div>
      
<footer class=" bg-zinc-800
             text-3xl text-white text-center 
             border-t-8 border-gray-400 
             fixed 
             inset-x-0 
             bottom-0 
             p-2">
  <div class="mx-auto max-w-screen-xl  py-4 ">
    <div class="mt-2 border-top  border-gray-800">
      <div class="sm:flex sm:justify-between">
        <p class="text-xs text-gray-400">
          © 2024. EMS. All rights reserved.
        </p>

        <ul  class="mt-4 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <Link  class="transition hover:opacity-75 text-gray-400">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link  class="transition hover:opacity-75 text-gray-400">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
