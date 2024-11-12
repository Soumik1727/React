import logo from './logo.svg';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() { 

    let [finalCategory, setFinalCategory] = useState([])
    let [finalProducts, setFinalProducts] = useState([])
    let [catName, setCatName] = useState('')

    let getCategory = ()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then((res)=>res.data)  // res will give us everything , we just need to access data exists in response(res)
        .then((finalRes)=>{
            // console.log(finalRes)
            setFinalCategory(finalRes)
        });
    };

    let getProducts = ()=>{
        axios.get('https://dummyjson.com/products')
        .then((proRes)=>proRes.data)
        .then((finalPro)=>{
            // console.log(finalPro);
            setFinalProducts(finalPro.products);
        });
    };

    useEffect(()=>{
        if(catName !== ""){
            axios.get(`https://dummyjson.com/products/category/${catName}`)
            .then((res)=>res.data)  // res will give us everything , we just need to access data exists in response(res)
            .then((finalRes)=>{
                // console.log(finalRes)
                setFinalProducts(finalRes.products)
            })
        }
    },[catName])
    useEffect(()=>{
        getCategory();
        getProducts();
    },[])

    let pItems = finalProducts.map((product, index)=>{
        return(
            <ProductItems key={index} pData={product}/>
        )
    })
  return (
    <>
                              
        <div className='py-[40px]'>
            <div className='max-w-[1320px] mx-auto'>
                <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our products</h1>
                <div className='grid grid-cols-[30%_auto] gap-[20px]'>
                    <div className='bg-[#a4e5a4]'>
                        <Category finalCategory={finalCategory} setCatName={setCatName}/>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 gap-5'>
                              {pItems}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  );
}

export default App;

function ProductItems({ pData }) {
    const { title, price } = pData; // Destructure title and price from pData
  
    return (
      <div className='shadow-lg text-center pb-4'>
        <img src={pData.thumbnail} alt={title} />
        <h4>{title}</h4>
        <b>{price}</b>
      </div>
    )
  }


