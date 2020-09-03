import React, { useState } from 'react';
import './index.css'


function App() {

  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  })
  const setName = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFullName((prev) => {
        if (name == 'fname') {  
          return{
            fname: value,
            lname: prev.lname
          }
        }else if (name == 'lname') {
          return{
            fname: prev.fname,
            lname: value
          }
        }
    })
  }
  

  return (
    <div className="Form">
      <div className="top_heading">
          <h1>Hello!{fullName.fname}{fullName.lname}</h1>
      </div>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <input
        type="text"
        placeholder="Enter Your First Name"
        name="fname"
        autoComplete="off"
        onChange={setName}/>
        <input
        type="text"
        placeholder="Enter Your Last Name"
        name="lname"
        autoComplete="off"
        onChange={setName}/>
        {/* <input
        type="email"
        placeholder="Enter Your Email Address"
        name="email"
        autoComplete="off"/>
        <input
        type="password"
        placeholder="Enter Your Account Password"
        name="password"
        autoComplete="off"/> */}
        <button
        type="submit"
        >Click Me</button>
      </form>
    </div>
  );
}

export default App;
