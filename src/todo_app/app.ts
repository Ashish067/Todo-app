// import TodoForm from "./todo/TodoForm";
// import todo from "./todo/todo";
// import FilterTodo from "./todo/FilterTodo";
// import useTodoData from "./todo/useTodoData";

// const App = () => {
//   const {
//     tasks,

//     handleDelete,
//     handleAdd,
//     selectedStatus,
//     setSelectedStatus,
//     handleEdit,
//     editText,
//     handleChange,
//     handleSaveClick,
//     handleActivate,
//     handleCompleted,
//   } = useTodoData();

//   return (
//     <>
//       <TodoForm onSubmit={(formData) => handleAdd(formData)} />
//       <FilterTodo
//         selectedStatus={selectedStatus}
//         onStatusChange={(status) => setSelectedStatus(status)}
//       />
//       <todo
//         tasks={tasks}
//         onDelete={(id) => handleDelete(id)}
//         onEdit={(id, todo) => handleEdit(id, todo)}
//         editText={editText}
//         onChange={(e) => handleChange(e)}
//         onSaveClick={(id) => handleSaveClick(id)}
//         onActivate={(id) => handleActivate(id)}
//         onCompleted={(id) => handleCompleted(id)}
//         status={selectedStatus}
//       />
//     </>
//   );
// };

// export default App;
