import React, { useState } from "react";

const List = ({ todos, setTodos }) => {
  const [filterText, setFilterText] = useState("all");
  const filtered = todos.filter((item) => {
    if (filterText === "all") {
      return item;
    } else if (filterText === "active") {
      if (item.isActive) {
        return item;
      }
    } else {
      if (!item.isActive) {
        return item;
      }
    }
  });
  console.log("filter", filtered);
  const inputChecked = (index) => {
    const data = todos.filter((todo) => {
      if (todo.id == index) {
        todo.isActive = !todo.isActive;
      }
      return todo;
    });
    setTodos(data);
  };
  const destroyTodo = (id) => {
    const data = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodos(data);
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {filtered.map((todo, i) => (
            <li
              key={i.toString()}
              className={!todo.isActive ? "completed" : null}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={!todo.isActive}
                  onChange={() => inputChecked(todo.id)}
                />
                <label>{todo.title}</label>
                <button
                  onClick={() => destroyTodo(todo.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{filtered.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              className={filterText == "all" ? "selected" : null}
              onClick={() => setFilterText("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={filterText == "active" ? "selected" : null}
              onClick={() => setFilterText("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={filterText == "completed" ? "selected" : null}
              onClick={() => setFilterText("completed")}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
};

export default List;
