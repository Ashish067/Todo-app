import { MdDeleteOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

interface toDos {
  id: number;
  todo: string;
  priority: string;
  status: string;
  editing: boolean;
}

interface Props {
  tasks: toDos[];
  onDelete: (id: number) => void;
  onEdit: (id: number, todo: string) => void;
  editText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSaveClick: (id: number) => void;
  onActivate: (id: number) => void;
  onCompleted: (id: number) => void;
  status: string;
}

const TodoList = ({
  tasks,
  onDelete,
  onEdit,
  editText,
  onChange,
  onSaveClick,
  onActivate,
  onCompleted,
  status,
}: Props) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <>
      {tasks.length !== 0 ? (
        <table className="max-w-lg w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-5 text-left text-gray-800 font-semibold uppercase tracking-wider border-b">
                Id
              </th>
              <th className="py-3 px-5 text-left text-gray-800 font-semibold uppercase tracking-wider border-b">
                Task
              </th>
              <th className="py-3 px-5 text-left text-gray-800 font-semibold uppercase tracking-wider border-b">
                Priority
              </th>
              <th className="py-3 px-5 text-left text-gray-800 font-semibold uppercase tracking-wider border-b">
                Status
              </th>
              <th className="py-3 px-5 text-left text-gray-800 font-semibold uppercase tracking-wider border-b"></th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((todo) => (
              <tr key={todo.id}>
                <td className="py-4 px-6 border-b ">{todo.id}</td>
                <td className="py-4 px-1 border-b  ">
                  {todo.editing ? (
                    <>
                      <input
                        type="text"
                        className="max-w-lg border border-gray-400"
                        value={editText}
                        onChange={(event) => onChange(event)}
                      />
                      <button
                        className="w-20 bg-green-400 border border-red-700 rounded-lg hover:bg-green-600 "
                        onClick={() => onSaveClick(todo.id)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    todo.todo
                  )}
                </td>
                <td
                  className={`py-4 px-6 border-b ${
                    todo.priority === "Very High" && "text-red-600"
                  } 
                  ${todo.priority === "High" && "text-blue-700"}
                  ${todo.priority === "Moderate" && "text-blue-500"}
                  ${todo.priority === "Low" && "text-blue-300"}
                  `}
                >
                  {todo.priority}
                </td>
                <td className="py-4 px-6 border-b  ">{todo.status}</td>
                <td className="py-4 px-6 border-b flex gap-1 ">
                  {(todo.status === "Pending" || todo.status === "Active") && (
                    <FaRegEdit
                      color="blue"
                      size={25}
                      className="hover:cursor-pointer"
                      onClick={() => onEdit(todo.id, todo.todo)}
                    />
                  )}

                  {todo.status === "Active" ? (
                    <FaCheckCircle
                      color="green"
                      size={25}
                      className="hover:cursor-pointer"
                      onClick={() => onCompleted(todo.id)}
                    />
                  ) : null}

                  {todo.status === "Pending" && (
                    <div className="flex items-center justify-center">
                      <div
                        key={todo.id}
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setIsHovered(todo.id)}
                        onMouseLeave={() => setIsHovered(null)}
                      >
                        {isHovered === todo.id && (
                          <div className="absolute bottom-12 bg-gray-800 text-white text-sm p-1 rounded">
                            Activate Task
                          </div>
                        )}

                        <FaArrowCircleUp
                          color="blue"
                          size={25}
                          className="hover:cursor-pointer text-blue-500 group"
                          onClick={() => onActivate(todo.id)}
                        />
                      </div>
                    </div>
                  )}

                  <MdDeleteOutline
                    color="red"
                    size={25}
                    onClick={() => onDelete(todo.id)}
                    className="hover:cursor-pointer"
                  />

                  {/* <button className="w-20 bg-blue-500 border border-red-700 rounded-lg hover:bg-red-500 ">
                      Delete
                    </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="max-w-lg w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-sd">
          {status === "Pending" && (
            <div className="p-4">
              <p>No tasks are pending...</p>
              <p>Check Active or Add New Task!</p>
            </div>
          )}
          {status === "Active" && (
            <div className="p-4">
              <p>No active tasks...</p>
              <p>Add New Task!</p>
            </div>
          )}
          {status === "Completed" && (
            <div className="p-4">
              <p>Nothing is here...</p>
              <p>Check Active or Pending...</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TodoList;
