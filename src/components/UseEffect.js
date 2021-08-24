import React, { useEffect, useState } from "react"

export default function UseEffectComponent() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        response.json().then(data => {
          setData(data)
          setLoading(false)
        })
      })
  }, [])

  return (
    <>
      <h1>useEffect</h1>

      {loading && "Loading..."}
      
      {data.map(item => (
        <p>{item.name}</p>
      ))}
    </>
  )
}