import { ChangeEvent, useEffect, useState } from "react";

interface Todo {
  id: number;
  todo: string;
  priority: string;
  status: string;
  editing: boolean;
}

interface TodoData {
  todo: string;
  priority: string;
  editing?: boolean;
}

const useTodoData = () => {
  const [tasks, setTasks] = useState<Todo[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? (JSON.parse(storedTasks) as Todo[])
      : [
          {
            id: 1,
            todo: "Get up early in the morning.",
            priority: "Low",
            status: "Active",
            editing: false,
          },
          {
            id: 2,
            todo: "Practice React.",
            priority: "High",
            status: "Pending",
            editing: false,
          },
          {
            id: 3,
            todo: "Take a challenge and complete it .",
            priority: "Moderate",
            status: "Completed",
            editing: false,
          },
          {
            id: 4,
            todo: "Make sure not get distracted from the challenge before completion.",
            priority: "Very High",
            status: "Active",
            editing: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [selectedStatus, setSelectedStatus] = useState<string>("Active");

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };
  const handleAdd = (newToDo: TodoData) => {
    setTasks([
      ...tasks,
      { ...newToDo, id: tasks.length + 1, status: "Pending", editing: false },
    ]);
  };
  const filteredToDos = tasks.filter((todo) => todo.status === selectedStatus);

  const [editText, setEditText] = useState("");
  const handleEdit = (id: number, currentText: string) => {
    console.log("clicked" + id);
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, editing: true } : task))
    );
    setEditText(currentText);
  };

  const handleSaveClick = (id: number) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, todo: editText, editing: false } : todo
      )
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleActivate = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "Active" } : task
      )
    );
  };

  const handleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
  };

  return {
    tasks: filteredToDos,
    selectedStatus,
    handleDelete,
    handleAdd,
    handleEdit,
    setSelectedStatus,
    editText,
    handleChange,
    handleSaveClick,
    handleActivate,
    handleCompleted,
  };
};

export default useTodoData;
