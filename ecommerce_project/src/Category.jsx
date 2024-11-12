import React from 'react'

export default function Category({finalCategory, setCatName}) {

  let cat = finalCategory.map((val,i)=>{
    return(
      <li onClick={()=>setCatName(val.name)} key = {i} className='bg-[#ecf7ed] p-[7px] cursor-pointer text-[20px] mb-2'>
          {val.name}
      </li>
    )
  })
  return (
    <div>
        <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
        <ul>
            {cat}
        </ul>
    </div>
  )
}
