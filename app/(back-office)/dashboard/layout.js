import Sidebar from '@/components/backoffice/Sidebar'
import React from 'react'
import Navbar from '@/components/backoffice/Navbar'

export default function Layout({children}) {
  return (
    <div className='flex gap-1'>
        {/*Sidebar*/}
        <Sidebar/>
        <div className='w-full'>
            {/*Header*/}
            <Navbar/>
            <main className='p-8 bg-slate-950 text-slate-50 min-h-screen ml-60 mt-16'>
                {children}
            </main>
            {/*Main*/}
        </div>
        {/*Main body*/}
    </div>
  )
}
