import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {

    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-teal-800 text-white p-4 text-3xl flex items-center gap-20'>
        <img src={data.avatar_url} alt="" width={300}/>
        <h1>Github Followers: {data.followers} </h1>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}