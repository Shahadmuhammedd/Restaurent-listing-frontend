import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RestCard from './RestCard'

function AllRest() {

  //1 create a base_url
  const base_url = 'http://localhost:3001/restaurants'

  //4.state creation for holding array data
  const [restData,setRestData] = useState([])

  //2.creating a function for fetching
  const fetchData = async()=>{
    const response = await axios.get(base_url)
    console.log(response.data);
    setRestData(response.data); ///5.assign array of data into the state
  }
  console.log(restData);

  //3.create useEffect for calling function.
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <RestCard restArray={restData}/>
    </div>
  )
}

export default AllRest