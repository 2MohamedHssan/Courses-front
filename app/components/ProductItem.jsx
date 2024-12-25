import { List } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ProductItem({item}) {
  return (
    <div className='cursor-pointer hover:shadow-gray-300 transition-all duration-200 hover:shadow-md hover:border p-1 hover:border-teal-500 rounded-lg'>
        <Image src={item.banner[0].url} alt='banner' width={400} height={350} className='rounded-t-lg h-[190px] object-cover'/>
        <div className='flex justify-between rounded-b-lg p-3 bg-gray-50 items-center'> 
            <div>
                <h2 className='font-bold w-full line-clamp-1 text-[14px]'>{item.title}</h2>
                <div className='text-[#777] flex items-center gap-1'>
                    <List className='w-4 h-4'/>
                    <p className='text-[12px] font-bold'>{item.catogory}</p>
                </div>
            </div>
            <h2>${item.price}</h2>
        </div>
    </div>
  )
}

export default ProductItem
