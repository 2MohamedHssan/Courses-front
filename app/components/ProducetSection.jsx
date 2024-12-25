'use client'
import React, { useEffect, useState } from 'react'
import ProducetList from './ProducetList'
import ProductApis from '../utils/ProductApis'

function ProducetSection() {
    const [productList,setProductList]=useState([])
    useEffect(()=>{
        getLatestProducts_();
    },[])
    const getLatestProducts_=()=>{
        ProductApis.getLatestProducts().then(res=>{
            setProductList(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-20'>
        <h2 className='text-xl my-4'>Our Letast Products</h2>
      <ProducetList productList={productList} />
    </div>
  )
}

export default ProducetSection
