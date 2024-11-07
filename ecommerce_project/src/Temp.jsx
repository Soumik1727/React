import logo from './logo.svg';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() { 
    let [finalCategory, setFinalCategory] = useState([]);
    let [finalProducts, setFinalProducts] = useState([]);
    let [catName, setCatName] = useState('');

    // Fetch categories
    let getCategory = () => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => res.data)
            .then((finalRes) => {
                setFinalCategory(finalRes); // set the fetched categories
            });
    };

    // Fetch products
    let getProducts = () => {
        axios.get('https://dummyjson.com/products')
            .then((proRes) => proRes.data)
            .then((finalPro) => {
                setFinalProducts(finalPro.products); // set the fetched products
            });
    };

    // Fetch products based on selected category
    useEffect(() => {
        if (catName !== "") {
            axios.get(`https://dummyjson.com/products/category/${catName}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    setFinalProducts(finalRes.products); // Update the products, not the categories
                });
        }
    }, [catName]);

    // Fetch initial data (categories and products)
    useEffect(() => {
        getCategory();
        getProducts();
    }, []);

    // Map products to display them
    let pItems = finalProducts.map((product, index) => {
        return (
            <ProductItems key={index} pData={product} />
        );
    });

    return (
        <>
            <div className='py-[40px]'>
                <div className='max-w-[1320px] mx-auto'>
                    <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our products</h1>
                    <div className='grid grid-cols-[30%_auto] gap-[20px]'>
                        <div className='bg-[#a4e5a4]'>
                            {/* Pass finalCategory and setCatName as props */}
                            <Category finalCategory={finalCategory} setCatName={setCatName} />
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-4'>
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
    const { title, price, thumbnail } = pData; // Destructure title, price, and thumbnail
  
    return (
      <div className='shadow-lg text-center pb-4'>
        <img src={thumbnail} alt={title} /> {/* Use pData.thumbnail */}
        <h4>{title}</h4>
        <b>{price}</b>
      </div>
    );
}
