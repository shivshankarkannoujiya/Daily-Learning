"use client";

import { todoService } from "@/services/todoService";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await todoService.getAllTodos();
      setTodos(data);
    } catch (error) {
      setError(error.message || "Failed to load todos");
    }
  };

  if (loading) return <p>Loading Todos...</p>;

  return (
    <div>
      <h1>Todo List</h1>
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li key={todo._id || todo.id}>
                <strong>
                  {todo.title} - {todo.isRecorded ? "DONE" : "PENDING"}
                </strong>
              </li>
            ))
          ) : (
            <p>NO TODO FOUND</p>
          )}
        </ul>
      )}
    </div>
  );
}
