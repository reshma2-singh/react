import React, { createContext, useState } from "react";
import ChildD from './components/ChildD'
export const FirstName = createContext();

function App() {
  const [user, setUser] = useState({
    name: "cat",
    age: 15,
    address: "some",
  });
  const [color, setColor] = useState("green")
  function handleChange(obj) {
    setUser(obj)
  }
  function handleClick(val) {
    setColor(val)
  }
  return (
    <div className="App">
      <FirstName.Provider value={[user, (obj) => handleChange(obj), { color }, (val) => handleClick(val)]}>

        <ChildD />

      </FirstName.Provider>
    </div>
  )
}
export default App;
