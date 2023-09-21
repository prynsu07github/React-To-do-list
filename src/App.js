import "./styles.css";
import { useState } from "react";
import { Plus, X } from "phosphor-react";

export default function App() {
  const [task, SetTask] = useState("");
  const [TaskList, setTaskList] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    if (task !== "") {
      setTaskList([...TaskList, task]);
      SetTask("");
    }
  }

  function deleteItem(indx) {
    const NewTaskList = TaskList.filter((_, i) => i !== indx);
    setTaskList(NewTaskList);
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <form style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="enter your task"
          value={task}
          style={{ padding: "10px" }}
          onChange={(e) => SetTask(e.target.value)}
        ></input>
        <button
          type="submit"
          style={{ background: "green" }}
          onClick={handleClick}
        >
          <Plus />
        </button>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        {TaskList.map((task, indx) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <li key={task} style={{ listStyle: "none", marginRight: "10px" }}>
                {task}
              </li>
              <button onClick={() => deleteItem(indx)}>{<X />}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
