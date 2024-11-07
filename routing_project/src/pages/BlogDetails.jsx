import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import {blog} from '../data/Blogs'

export default function BlogDetails() {

  let uselocation = useLocation();
  console.log("currLoc: ",uselocation.pathname.split('/')[2]);
  let currId = uselocation.pathname.split('/')[2]   // split('/')[2]  => the path is converted into array and accessing arr[2]
  
  let currData = blog.filter( (v)=>v.id==currId)[0]   // 0 position data will appear // that means only 1 data
                                                          // will appear
  console.log("currData: ",currData);
  
  return (
    <>
        <Header/>
        <h1>{currData.title}</h1>
        <p>{currData.body}</p>
    </>
  )
}
