import "./App.css";

import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <div>
      <section className="todoapp">
        <Contacts></Contacts>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
