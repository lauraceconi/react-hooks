import React, { createContext, useState } from "react"
import User from "./User"

export const AppContext = createContext(null)

export default function UseContextComponent() {
  const [username, setUsername] = useState("lceconi");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <User />
    </AppContext.Provider>
  )
}