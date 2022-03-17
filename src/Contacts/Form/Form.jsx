import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const Form = ({ setTodos, todos }) => {
  const [form, setForm] = useState({
    title: "",
    isActive: true,
    id: uuid(),
  });

  const onChangeInput = (e) => {
    setForm({ ...form, title: e.target.value });
  };
  useEffect(() => {
    setForm({ title: "", isActive: true, id: uuid() });
  }, [todos]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.title === "") {
      return false;
    }

    setTodos([...todos, form]);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="title"
          value={form.title}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

export default Form;
