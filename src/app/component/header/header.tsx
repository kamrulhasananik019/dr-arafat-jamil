import React from 'react'

export default function Header() {
  const navMenus=["Home","About","Skills","Blog","Contact"];
  return (
  <div className='bg-blue-200'>
      <div className='container flex justify-between items-center mx-auto  px-6 py-5 '>
        <div>
        <p className='text-2xl'>DR. Jamil</p>
        </div>
        <div>
           {
            navMenus.map((menu,index)=>(
              <a className='px-5 font-semibold' key={index} >{menu}</a>
            ))
           }
        </div>
      </div>
  </div>
  )
}
