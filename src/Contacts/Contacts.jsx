import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./styles.css";
import { v4 as uuid } from "uuid";
const Contacts = () => {
  const [todos, setTodos] = useState([
    { title: "Learn JavaScript", isActive: false, id: uuid() },
    { title: "Learn React", isActive: true, id: uuid() },
    { title: "Have a life!", isActive: true, id: uuid() },
    { title: "Write tutorials", isActive: true, id: uuid() },
    { title: "Taste JavaScript", isActive: false, id: uuid() },
  ]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <List todos={todos} setTodos={setTodos}></List>
    </div>
  );
};

export default Contacts;
