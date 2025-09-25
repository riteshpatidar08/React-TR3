import React from 'react'
import { Link } from 'react-router-dom'
function Dashboardpage() {
  return (
    <div>
      <aside className='bg-blue-700 flex flex-col gap-2 text-white font-bold text-2xl justify-center px-10 w-96 h-screen'>
        <Link>Overview</Link>
        <Link>Customers</Link>
        <Link>Integration</Link>
      </aside>
    </div>
  )
}

export default Dashboardpage
