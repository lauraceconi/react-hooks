import React, { forwardRef, useImperativeHandle, useState } from "react"

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

export default Button