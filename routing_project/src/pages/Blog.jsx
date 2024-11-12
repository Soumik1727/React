import React from 'react'
import Header from '../common/Header'
import {blog} from '../data/Blogs'
import {Link} from 'react-router-dom'

export default function Blog() {

    let allBlogs = blog.map( (val, index)=>{
        return(
            <div className='blogItems' key={index}>
                <p>
                    {val.title}
                    {val.body}
                </p>
                <button> <Link to={`/blog/${val.id}`}> Read more </Link></button>
            </div>
        )
    });
  return (
    <>
        <Header/>
        <h1>Blog pages</h1>
        <div className='container'>
            {allBlogs}
        </div>
    </>
  )
}
