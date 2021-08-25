import React, { useState, useEffect } from "react";
import "./todo.css";

function Todo() {
  const [item, setItem] = useState([
    { email: "abhishek", password: "admin@123" },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = (email, password) => {
    setItem((old) => {
      return [...old, { email, password }];
    });
    console.log(item);
  };

  const handleDelete = (id) => {
    let filteredItems = item;
    filteredItems.splice(id, 1);
    console.log("filteredItems", filteredItems);
    setItem([...filteredItems]);
  };

  return (
    <>
      {item.map((data, i) => {
        return (
          <Shubham
            id={i}
            key={i}
            password={data.password}
            email={data.email}
            handleAdd={handleAdd}
            setEmail={setEmail}
            setPassword={setPassword}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

const Shubham = ({
  key,
  id,
  email,
  password,
  handleDelete,
  handleAdd,
  setEmail,
  setPassword,
}) => {
  const [showButtons, setshowButtons] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setshowButtons(true);
    }
  }, [email, password]);

  return (
    <div>
      {/* {alert(showButtons)} */}
      <div className="main">
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        {showButtons && (
          <div className="Section">
            <div className="style">
              <button className="Remove" onClick={() => handleDelete(id)}>
                Remove
              </button>
              <button
                className="Add"
                onClick={() => handleAdd(email, password)}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
