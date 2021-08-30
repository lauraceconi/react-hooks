import React, { useState, useEffect, useMemo } from "react"

export default function UseMemoComponent() {
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

  const findLongestName = (users) => {
    let longestName = ""
    for (let i in users) {
      if (users[i].name.length > longestName.length) longestName = users[i].name
    }
    console.log("Function called")
    return longestName
  }

  const findLongestNameMemo = useMemo(() => findLongestName(data), [data])

  const handleClick = () => setToggle(!toggle)

  return (
    <>
      <h1>useMemo</h1>

      {loading && "Loading..."}
      
      {/* <p>The longest name is: {findLongestName(data)}</p> */}
      <p>The longest name is: {findLongestNameMemo}</p>
      <div>
        <button onClick={handleClick}>Toggle</button>
      </div>
      <p>{toggle && "Toggle is true!"}</p>
    </>
  )
}