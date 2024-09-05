import TodoForm from "./todo_app/TodoForm";
import FilterTodo from "./todo_app/FilterTodo";
import useTodoData from "./todo_app/useTodoData";
import TodoList from "./todo_app/TodoList";

const App = () => {
  const {
    tasks,

    handleDelete,
    handleAdd,
    selectedStatus,
    setSelectedStatus,
    handleEdit,
    editText,
    handleChange,
    handleSaveClick,
    handleActivate,
    handleCompleted,
  } = useTodoData();

  return (
    <>
      <TodoForm onSubmit={(formData) => handleAdd(formData)} />
      <FilterTodo
        selectedStatus={selectedStatus}
        onStatusChange={(status) => setSelectedStatus(status)}
      />
      <TodoList
        tasks={tasks}
        onDelete={(id) => handleDelete(id)}
        onEdit={(id, todo) => handleEdit(id, todo)}
        editText={editText}
        onChange={(e) => handleChange(e)}
        onSaveClick={(id) => handleSaveClick(id)}
        onActivate={(id) => handleActivate(id)}
        onCompleted={(id) => handleCompleted(id)}
        status={selectedStatus}
      />
    </>
  );
};

export default App;
