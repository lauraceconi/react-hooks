import React, { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { 
        ...state,
        count: state.count + 1,
      }
    case "TOGGLE_SHOW_TEXT":
      return {
        ...state,
        showText: !state.showText,
      }
    default:
      return state
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  const handleAdd = () => { 
    dispatch({ type: "INCREMENT" })
    dispatch({ type: "TOGGLE_SHOW_TEXT" })
  }

  return (
    <>
      <h1>useReducer</h1>
      <button onClick={handleAdd}>Add</button>
      <h2>Counter: {state.count}</h2>
      {state.showText && <h2>Text!</h2>}
    </>
  )
}