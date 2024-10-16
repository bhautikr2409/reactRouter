import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function  Github() {

    const data =  useLoaderData()

    // const [data , setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/bhautikr2409')
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         setData(data)
    //         // console.log("data abc",data)
    //     })
    // },[])

  return (
    <>
   <div className='text-center flex items-center flex-col m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h1 className='text-center m-4 bg-gray-600 text-white text-3xl'>USER : {data.login}</h1>
        <img src={data.avatar_url} alt="userImage" />
    </div>
    </>
  )
}

export default  Github

export  const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/bhautikr2409')

    return response.json()
}