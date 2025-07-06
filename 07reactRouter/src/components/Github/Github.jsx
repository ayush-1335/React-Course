import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(0)
    useEffect(() => {
        fetch('https://api.github.com/users/ayush-1335')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers  }</div>
  )
}

export default Github