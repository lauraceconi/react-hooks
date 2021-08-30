import React, { useEffect, useState, useCallback } from "react"

export default function UseCallbackComponent() { 
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(true)

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

  const findLongestName = useCallback(() => {
    let longestName = ""
    for (let i in data) {
      if (data[i].name.length > longestName.length) longestName = data[i].name
    }
    return longestName
  }, [data])

  // const findLongestName = () => {
  //   let longestName = ""
  //   for (let i in data) {
  //     if (data[i].name.length > longestName.length) longestName = data[i].name
  //   }
  //   return longestName
  // }

  const handleClick = () => setToggle(!toggle)

  return (
    <>
      <h1>useCallback</h1>

      {loading && "Loading..."}

      <Child findLongestName={findLongestName} />
      
      <div>
        <button onClick={handleClick}>Toggle</button>
      </div>
      <p>{toggle && "Toggle is true!"}</p>
    </>
  )
}

function Child({ findLongestName }) {
  useEffect(() => {
    console.log("Function called!")
  }, [findLongestName])

  return <p>{findLongestName()}</p>
}