import React, { useState, useRef, forwardRef, useImperativeHandle } from "react"

export default function UseImperativeHandlerComponent() {
  const buttonRef = useRef(null)

  const handleClick = () => {
    buttonRef.current.alterToggle()
  }

  return (
    <>
      <h1>useImperativeHandler</h1>
      <button onClick={handleClick}>Button from parent</button>
      <Button ref={buttonRef} />
    </>
  )
}

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    // alterToggle() {
    //   setToggle(!toggle)
    // }
    alterToggle: () => setToggle(!toggle)
  }))

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Button from child</button>
      {toggle && <div>Toggle</div>}
    </>
  )
})