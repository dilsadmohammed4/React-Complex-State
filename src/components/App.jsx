import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function onChangeFullName(event) {
    const { value, name } = event.target;
    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return { fName: preValue.fName, lName: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={onChangeFullName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={onChangeFullName}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
