"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTaskStore } from "@/lib/store";

export const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("select a priority");

  const handleSubmit = () => {
    if (title && priority) {
      if (priority === "select a priority") {
        alert("Please select a priority");
        return;
      } else {
        addTask({
          id: uuid(),
          title,
          priority,
          column: "active",
        });
        setTitle("");
        setPriority("");
      }
    } else {
      alert("Please enter title");
    }
  };

  return (
    <div className="flex space-x-5 p-5">
      <div className="flex flex-col space-y-3">
        <input
          className="border p-1"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="border p-1"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="select a priority">Select priority</option>
          <option value="high">High</option>
          <option value="med">Med</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button className="border bg-slate-200 p-2" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
