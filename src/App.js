import "./styles.css";

import React, { useState } from "react";

// Initial TrelloBoard component for the user to extend
const TrelloBoard = () => {
  // State to manage tasks and categories
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [editTaskId, setEditTaskId] = useState("");
  const [editTaskName, setEditTaskName] = useState("");
  const [editTaskCategory, setEditTaskCategory] = useState("");

  // Add a new task (Complete this function)
  const addTask = () => {
    // Placeholder: Add task logic
    const newTask = {
      id: Date.now(),
      name: taskName,
      category: taskCategory,
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskName("");
    setTaskCategory("");
  };

  // Delete a task (Complete this function)
  const deleteTask = (id) => {
    // Placeholder: Delete task logic
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Start editing a task (Complete this function)
  const startEditing = (task) => {
    // Placeholder: Start editing task logic
    setEditTaskId(task.id);
    setEditTaskName(task.name);
    setEditTaskCategory(task.category);
  };

  // Save edited task (Complete this function)
  const saveEdit = () => {
    // Placeholder: Save edited task logic
    const saved = tasks.map((task) => {
      if (editTaskId === task.id) {
        return { ...task, name: editTaskName, category: editTaskCategory };
      }
      return task;
    });
    setTasks(saved);
    setEditTaskId("");
    setEditTaskName("");
    setEditTaskCategory("");
  };

  // Change task category (Complete this function)
  const changeCategory = (taskId, newCategory) => {
    // Placeholder: Change category logic
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, category: newCategory };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Group tasks by category (Complete this function)
  const categories = [...new Set(tasks.map((task) => task.category))];

  // console.log("editTaskName: ", editTaskName);
  return (
    <div style={styles.container}>
      <h1>Trello-like Task Board</h1>

      {/* Add Task Form */}
      <div style={styles.form}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          style={styles.input}
        />
        <input
          type="text"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
          placeholder="Task category"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add Task
        </button>
      </div>

      {/* Display Tasks by Category */}
      {categories.map((category) => (
        <div key={category} style={styles.category}>
          <h2>{category}</h2>
          <ul style={styles.taskList}>
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <li key={task.id} style={styles.taskItem}>
                  {/* Edit/Delete buttons and task logic */}

                  {editTaskId === task.id ? (
                    <div>
                      <input
                        type="text"
                        value={editTaskName}
                        onChange={(e) => setEditTaskName(e.target.value)}
                      />
                      <input
                        type="text"
                        value={editTaskCategory}
                        onChange={(e) => setEditTaskCategory(e.target.value)}
                      />
                      <button onClick={saveEdit}>Save Edit</button>
                    </div>
                  ) : (
                    <div>
                      {task.name}
                      <button
                        style={styles.button}
                        onClick={() => startEditing(task)}
                      >
                        Edit
                      </button>
                      <button
                        style={styles.button}
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                      <select
                        value={task.category}
                        onChange={(e) =>
                          changeCategory(task.id, e.target.value)
                        }
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Placeholder styles for the application
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    margin: "5px",
    fontSize: "16px",
    width: "200px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  category: {
    marginTop: "20px",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    marginBottom: "10px",
    textAlign: "left",
  },
};

// Default App component for user to extend
export default function App() {
  return <TrelloBoard />;
}
