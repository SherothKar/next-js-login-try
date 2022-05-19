import { useRouter } from 'next/router'
import React from 'react'

function index() {
    let route = useRouter();
    let handle = ()=>{
route.push('/blog');
    }
  return (
    <div>
      home
      <button onClick={handle}>
          Programmatic route
      </button>
    </div>
  )
}

export default index
